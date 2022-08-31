import React, {useState} from "react";
import {IRoom} from "../types/IRoom";
import RoomDashboard from "../components/RoomDashboard";
import {Button, Checkbox, Label, Modal, TextInput} from "flowbite-react";
import NavigationBar from "../components/NavigationBar";
import RoomModal from "../components/RoomModal";

const RoomPage : React.FC = () => {
    const [results, setResults] = useState<IRoom[]>([
        {
            id: 1,
            description: "Avec télé et wifi",
            status: "AVAILABLE",
            categoryName: "Double",
            price: 2000,
            bookingCount: 2
        },
        {
            id: 2,
            description: "Avec télé mais sans wifi",
            status: "NOT AVAILABLE",
            categoryName: "Simple",
            price: 2500,
            bookingCount: 0
        }
    ])
    const [modal, toggleModal] = useState<boolean>(false)
    const [postModal, togglePostModal] = useState<boolean>(false)

    const [id, setId] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [price, setPrice] = useState("");
    const [bookingCount, setBookingAccount] = useState("");


    const [action, setAction] = useState("");
    const [selection, setSelection] = useState<number>(0);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [pageNumber, setPageNumber] = useState("");
    const [idDrink, setIdDrink] = useState("");
    const [catIdCate, setCatIdCate] = useState("");
    var datas: any = [];

    const GetValues = (e: any) => {
        toggleModal(true)
        var target = e.target;
        while (target && target.nodeName !== "TR") {
            target = target.parentNode;
        }
        if (target) {
            var cells = target.getElementsByTagName("td");
            for (var i = 0; i < cells.length; i++) {
                datas.push(cells[i].innerHTML);
            }
        }
        setId(datas[0]); setDescription(datas[1]); setStatus(datas[2]); setCategoryName(datas[3]);
        setPrice(datas[4]); setBookingAccount(datas[5]);
        setAction("putting");
    }

    return(<>
        <div className={"min-w-full min-h-screen bg-gradient-to-b from-sky-700 via-sky-500 to-sky-300"} >
            <div className={"mb-5"}>
            <NavigationBar page={"/booking_list"} linkOne={"Liste des reservations"} buttonText={"Se déconnecter"} redirectPath={"/"}/>
            </div>
            <RoomDashboard data={results} getValue={GetValues} />
            <Modal
                show={modal}
                onClose={() => toggleModal(false)}
            >
                <Modal.Header>
                    Terms of Service
                </Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <form className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="email1"
                                        value="Id"
                                    />
                                </div>
                                <TextInput
                                    onChange={(e) => setId(e.target.value)}
                                    value={id}
                                    id="email1"
                                    type="email"
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
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    id="password1"
                                    type="string"
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password1"
                                        value="Status"
                                    />
                                </div>
                                <TextInput
                                    onChange={(e) => setStatus(e.target.value)}
                                    value={status}
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
                                    onChange={(e) => setCategoryName(e.target.value)}
                                    value={categoryName}
                                    id="password1"
                                    type="string"
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password1"
                                        value="Price"
                                    />
                                </div>
                                <TextInput
                                    onChange={(e) => setPrice(e.target.value)}
                                    value={price}
                                    id="password1"
                                    type="string"
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password1"
                                        value="Booking Account"
                                    />
                                </div>
                                <TextInput
                                    onChange={(e) => setBookingAccount(e.target.value)}
                                    value={bookingCount}
                                    id="password1"
                                    type="string"
                                    required={true}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">
                                    Show password
                                </Label>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" type="submit" onClick={() => toggleModal(false)}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    </>);
}

export default RoomPage;
