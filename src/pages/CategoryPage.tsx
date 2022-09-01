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
            const promise = axios.get("https://hotelcp.herokuapp.com/roomCategories?page=1&pageSize=10",
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
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                CleanningForms();
                togglePostModal(false);
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

    const [page, setPage] = useState<number>(1);

    const onPageChange = (): void => {
        setPage(page+1)
    }

    return(<>
        <div className={"min-w-full min-h-screen bg-white"} >
            <div className={"mb-5"}>
                <NavigationBar pageTwo={"/room"} linkTwo={"Liste des chambres"} pageOne={"/booking_list"} linkOne={"Liste des reservations"} buttonText={"Se déconnecter"}
                               redirectPath={"/"}/>
            </div>
            <div className={"bg-gray-400 py-3 mx-20 rounded-3xl"}>
                <div className="flex flex-wrap gap-2 w-3/4 mx-auto my-7">
                    <Button
                        pill={true}
                        onClick={() => Preposting()}
                    >
                        Ajouter une nouvelle categorie
                    </Button>
                </div>
                <CategoryDashboard data={results} getValue={GetValues} />
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
                    <Button color="gray" type="submit" onClick={() => toggleModal(false)}>
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