import React, {useEffect, useState} from "react";
import {IRoom} from "../types/IRoom";
import list from "../mock/RoomList.json";
import NavigationBar from "../components/NavigationBar";
import {Button, Label, Modal, Pagination, TextInput} from "flowbite-react";
import RoomDashboard from "../components/RoomDashboard";
import {ICategory} from "../types/ICategory";
import CategoryDashboard from "../components/CategoryDashboard";
import axios from "axios";
import {data} from "autoprefixer";

const CategoryPage : React.FC = () => {
    const [results, setResults] = useState<ICategory[]>([])

    const [modal, toggleModal] = useState<boolean>(false)
    const [postModal, togglePostModal] = useState<boolean>(false)

    const [green, setGreen ] = useState<boolean>(false)
    const [red, setRed ] = useState<boolean>(false)

    const [id, setId] = useState("");
    const [categoryName, setCategoryName] = useState("");
    const [price, setPrice] = useState("");

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
        setId(datas[0]); setCategoryName(datas[1]);
        setPrice(datas[2]);
        setAction("putting");
    }

    useEffect(() => {
            const promise = axios.get("https://hotelcp.herokuapp.com/roomCategories",
                { headers: {authorization: `Basic ${window.localStorage.getItem("token")}`} });
            promise.then((response) => {
                setResults(response.data);
            }).catch((err) => {
                console.log(err);
            })
        }, [modal, results, data, setResults]
    )

    const PostCategory = () => {
        const promise = axios.post(
            "https://hotelcp.herokuapp.com/roomCategories", {
                "categoryName": categoryName,
                "price": price
            }, { headers: {authorization: `Basic ${window.localStorage.getItem("token")}`} });
        promise
            .then((response) => {
                console.log(response);
                setGreen(true);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                CleanningForms();
                togglePostModal(false);
            })
    }

    const putCatgory = () => {
        const promise = axios.put(
            "https://hotelcp.herokuapp.com/roomCategories/"+id,
            {
                "categoryName": categoryName,
                "price": price,
            },
            { headers: {authorization: `Basic ${window.localStorage.getItem("token")}`} });
        promise
            .then((response) => {
                console.log(response);
                setRed(true);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                CleanningForms();
                togglePostModal(false)
                toggleModal(false);
            })
    }

    const CleanningForms = ():void => {
        setId(''); setCategoryName('');
        setPrice('');
        togglePostModal(true);
    }

    const Preposting = (): void => {
        setAction("posting");
        CleanningForms();
    }

    return(<>
        <div className={"min-w-full min-h-screen bg-white"} >
            <div className={"mb-5"}>
                <NavigationBar pageTwo={"/room"} linkTwo={"Liste des chambres"} pageOne={"/booking_list"} linkOne={"Liste des reservations"} buttonText={"Se déconnecter"}
                               redirectPath={"/"}/>
            </div>
            <div className={"bg-gray-400 pt-3 pb-20 mx-20 rounded-3xl"}>
                <div className="flex flex-wrap gap-2 w-3/4 mx-auto my-7">
                    <Button
                        pill={true}
                        onClick={() => Preposting()}
                    >
                        Ajouter une nouvelle categorie
                    </Button>
                </div>
                <CategoryDashboard data={results} getValue={GetValues} />
            </div>

            { green ? <div id="toast-success"
                           className="flex items-center p-4 mt-5 ml-20 w-full max-w-xs text-gray-500 bg-green-300 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                           role="alert">
                <div
                    className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"></path>
                    </svg>
                    <span className="sr-only">Check icon</span>
                </div>
                <div className="ml-3 text-sm font-normal">Item add successfully.</div>
                <button type="button"
                        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        data-dismiss-target="#toast-success" aria-label="Close">
                    <span className="sr-only" onClick={() => setGreen(false)}>Close</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg" onClick={() => setGreen(false)}>
                        <path fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div> : null }

            { red ? <div id="toast-success"
                         className="flex items-center p-4 mt-5 ml-20 w-full max-w-xs text-gray-500 bg-green-300 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                         role="alert">
                <div
                    className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"></path>
                    </svg>
                    <span className="sr-only">Check icon</span>
                </div>
                <div className="ml-3 text-sm font-normal">Item change successfully.</div>
                <button type="button"
                        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        data-dismiss-target="#toast-success" aria-label="Close">
                    <span className="sr-only" onClick={() => setRed(false)}>Close</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg" onClick={() => setRed(false)}>
                        <path fill-rule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div> : null }


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
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" type="submit" onClick={() => putCatgory()}>
                        Envoyer
                    </Button>
                </Modal.Footer>
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
                    <Button color="gray" type="submit" onClick={() => PostCategory()}>
                        Envoyer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    </>);
}

export default CategoryPage;