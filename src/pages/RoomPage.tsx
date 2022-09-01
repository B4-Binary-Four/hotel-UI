import React, {useEffect, useState} from "react";
import {IRoom} from "../types/IRoom";
import RoomDashboard from "../components/RoomDashboard";
import {Button, Label, Modal, Pagination, TextInput} from "flowbite-react";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import list from "../mock/RoomList.json";
import {data} from "autoprefixer";

const RoomPage: React.FC = () => {
    const [results, setResults] = useState<IRoom[]>([])

    const [modal, toggleModal] = useState<boolean>(false)
    const [modalCat, toggleModalCat] = useState<boolean>(false)
    const [postModal, togglePostModal] = useState<boolean>(false)

    const [id, setId] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [price, setPrice] = useState("");
    const [bookingCount, setBookingAccount] = useState("");

    const [action, setAction] = useState("");
    const [selection, setSelection] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState("");
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
        setId(datas[0]);
        setDescription(datas[1]);
        setStatus(datas[2]);
        setCategoryName(datas[3]);
        setPrice(datas[4]);
        setBookingAccount(datas[5]);
        setAction("putting");
    }

    useEffect(() => {
            const promise = axios.get("https://hotelcp.herokuapp.com/rooms?page=1&pageSize=10");
            promise.then((response) => {
                setResults(response.data);
            }).catch((err) => {
                console.log(err);
            })
        }, [modal, results, data, setResults]
    )

    const PostRoom = () => {
        const promise = axios.post(
            "https://hotelcp.herokuapp.com/rooms", {
                "description": description,
                "categoryName": categoryName
            }, { headers: { 'Access-Control-Allow-Origin': "*" } });
        promise
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                CleanningForms();
                togglePostModal(false);
            })
    }

    const putData = () => {
        var username = 'test';
        var password = 'test';
        var credentials = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');
        var basicAuth = 'Basic ' + credentials;
        const promise = axios.put(
            "https://hotelcp.herokuapp.com/rooms"+id,
            {
                "description": description,
                "categoryName": categoryName
            },
            {
                headers: { 'Authorization': `Basic ${credentials}` }
            });
        promise
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                CleanningForms();
                togglePostModal(false);
            })
    }

    const CleanningForms = (): void => {
        setId('');
        setDescription('');
        setStatus('');
        setCategoryName('');
        setPrice('');
        setBookingAccount('');
        togglePostModal(true);
    }

    const Preposting = (): void => {
        setAction("posting");
        CleanningForms();
    }

    const [page, setPage] = useState<number>(1);

    const onPageChange = (): void => {
        setPage(page + 1)
    }

    return (<>
        <div className={"min-w-full mn-h-screen bg-white"}>
            <div className={"mb-5"}>
                <NavigationBar pageTwo={"/category"} linkTwo={"Liste des categories"} pageOne={"/booking_list"} linkOne={"Liste des reservations"} buttonText={"Se déconnecter"}
                               redirectPath={"/"}/>
            </div>
            <div className={"bg-gray-400 py-3 mx-20 rounded-3xl"}>
                <div className="flex flex-wrap gap-2 w-3/4 mx-auto my-7">
                    <Button
                        pill={true}
                        onClick={() => Preposting()}
                    >
                        Ajouter une nouvelle chambre
                    </Button>
                </div>
                <RoomDashboard data={results} getValue={GetValues}/>
                <div className="flex flex-wrap gap-2 w-3/4 mx-auto my-7">
                    <Pagination
                        currentPage={1}
                        totalPages={100}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>


            <Modal
                show={modal}
                onClose={() => toggleModal(false)}
            >
                <Modal.Header>
                    {categoryName}
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
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" type="submit" onClick={() => putData()}>
                        Envoyer
                    </Button>
                </Modal.Footer>

                <Modal
                    show={modalCat}
                    onClose={() => toggleModalCat(false)}
                >
                    <Modal.Header>
                        Category
                    </Modal.Header>
                </Modal>

            </Modal>
            <Modal
                show={postModal}
                onClose={() => togglePostModal(false)}
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
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" type="submit" onClick={() => PostRoom()}>
                        Envoyer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    </>);
}

export default RoomPage;
