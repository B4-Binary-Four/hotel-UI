import React, {useEffect, useState} from "react";
import NavigationBar from "../components/NavigationBar";
import Offers from "../components/Offers";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Box from "../components/ImageBox";
import Features from "../components/Features";
import {Button, Label, Modal, TextInput} from "flowbite-react";
import axios from "axios";
import {data} from "autoprefixer";
import {ICategory} from "../types/ICategory";
import Reviews from "../components/Reviews";

const LandingPage : React.FC = () => {
    const [modal, toggleModal] = useState<boolean>(false);
    const [reservationModal, toggleReservationModal] = useState<boolean>(false)
    const [results, setResults] = useState<ICategory[]>([])
    const [select, setSelect] = useState<string>("")
    const [otherResult, setOtherResult] = useState<string[]>([])

    const [clientName, setClientName] = useState<string>("")
    const [phoneNumber, setPhoneNumber] = useState<string>("")
    const [bookingDate, setBookingDate] = useState<Date>(new Date())
    const [bookingEndDate, setBookingEndDate] = useState<Date>(new Date())
    const [endpoint, setEndpoint] = useState<string>("")

    useEffect(() => {
            const promise = axios.get("http://localhost:8080/roomCategories",
                { headers: {authorization: `Basic ${window.localStorage.getItem("token")}`} });
            promise.then((response) => {
                setResults(response.data);
            }).catch((err) => {
                console.log(err);
            })
        }, [modal, results, data, setResults]
    )

    useEffect(() => {
            const promise = axios.get("http://localhost:8080/rooms?page=1&pageSize=500&category="+select,
                { headers: {authorization: `Basic ${window.localStorage.getItem("token")}`} });
            promise.then((response) => {
                setOtherResult(response.data);
            }).catch((err) => {
                console.log(err);
            })
        }, [modal, results, data, setOtherResult]
    )

    const OneToOne = () => {
        toggleModal(false);
        toggleReservationModal(true);
    }

    const PostBooking = () => {
        const promise = axios.post(
            "http://localhost:8080/booking", {
                "clientName": clientName,
                "phoneNumber": phoneNumber,
                "bookingDate": bookingDate,
                "bookingEndDate": bookingEndDate,
                "roomId": 1
            }, { headers: {authorization: `Basic ${window.localStorage.getItem("token")}`} });
        promise
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                toggleReservationModal(false);
            })
    }

    return(<>
        <div className={"min-w-full min-h-screen bg-white"} >
            <NavigationBar pageTwo={""} pageOne={""} redirectPath={"/login"} buttonText={"Se connecter"}/>
            <Box/>
            <Button onClick={() => toggleModal(true)}>
                Cliquez ici pour reserver
            </Button>
            <Offers/>
            <AboutUs/>
            <Features/>
            <Reviews/>
            <Footer/>
        </div>

        <Modal
            show={modal}
            onClose={() => toggleModal(false)}
        >
            <Modal.Header>
                Selectionner
            </Modal.Header>
            <Modal.Body>
                <label htmlFor="underline_select" className="sr-only">Underline select</label>
                <select id="underline_select"
                        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        onChange={(e: React.FormEvent<HTMLSelectElement>) => setSelect(e.currentTarget.value)}
                >
                    {results.map((item: ICategory) => (
                        <option key={`${item.categoryName}`} value={item.categoryName}>{item.categoryName}</option>
                    ))}
                </select>
            </Modal.Body>
            <Modal.Footer>
                <Button color="gray" type="submit" onClick={() => OneToOne()}>
                    Envoyer
                </Button>
            </Modal.Footer>
        </Modal>

        <Modal
            show={reservationModal}
            onClose={() => toggleReservationModal(false)}
        >
            <Modal.Header>
                Ajouter
            </Modal.Header>
            <Modal.Body>
                <div className="space-y-6">
                    <form className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Nom"
                                />
                            </div>
                            <TextInput
                                onChange={(e) => setClientName(e.target.value)}
                                value={clientName}
                                id="password1"
                                type="string"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Description"
                                />
                            </div>
                            <TextInput
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                value={phoneNumber}
                                id="password1"
                                type="string"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Category name"
                                />
                            </div>
                            <TextInput
                                type="Date"
                                onChange={(e) => setBookingDate(new Date(e.target.value))}
                                value={bookingDate.toDateString()}
                                id="password1"
                                required={true}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password1"
                                    value="Category name"
                                />
                            </div>
                            <TextInput
                                onChange={(e) => setBookingEndDate(new Date(e.target.value))}
                                value={bookingEndDate.toDateString()}
                                id="password1"
                                type="string"
                                required={true}
                            />
                        </div>
                        <div>
                            <select id="underline_select"
                                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                                    onChange={(e: React.FormEvent<HTMLSelectElement>) => setSelect(e.currentTarget.value)}
                            >
                                {otherResult.map((item: string) => (
                                    <option key={`${item}`} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button color="gray" type="submit" onClick={() => PostBooking()}>
                    Envoyer
                </Button>
            </Modal.Footer>
        </Modal>

    </>);
}


export default LandingPage;