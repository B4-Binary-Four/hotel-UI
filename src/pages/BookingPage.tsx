import React, {useEffect, useState} from "react";
import NavigationBar from "../components/NavigationBar";
import BookingDashboard from "../components/BookingDashboard";
import Booking from "../types/Booking";
import RoomCategory from "../types/RoomCategory";
import axios from "axios";
import {data} from "autoprefixer";

const BookingPage : React.FC = () => {
    const [results, setResults] = useState<Booking[]>([])

    const [modal, toggleModal] = useState<boolean>(false)
    const [modalCat, toggleModalCat] = useState<boolean>(false)
    const [postModal, togglePostModal] = useState<boolean>(false)
    const [green, setGreen ] = useState<boolean>(false)
    const [putConf, setPutConf] = useState<boolean>(false)
    const [putCon, setPutCon] = useState<boolean>(false)

    const [id, setId] = useState("");
    const [clientName, setClientName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [bookingDate, setBookingDate] = useState("");
    const [bookingEndDate, setBookingEndDate] = useState("");
    const [roomId, setRoomId] = useState("");
    const [creationDate, setCreationDate] = useState("");
    const [roomCategoryName, setRoomCategoryName] = useState("");

    const [page, setPage] = useState(1);
    const [nbrPerPage, setNrbPerPage] = useState(5);

    const [action, setAction] = useState("");
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
        setClientName(datas[1]);
        setPhoneNumber(datas[2]);
        setBookingDate(datas[3]);
        setBookingEndDate(datas[4]);
        setRoomId(datas[5]);
        setCreationDate(datas[6]);
        setRoomCategoryName(datas[7])
        setAction("putting");
    }

    useEffect(() => {
            const promise = axios.get("https://hotelcp.herokuapp.com/bookings?page="+page+"&pageSize="+nbrPerPage);
            promise.then((response) => {
                setResults(response.data);
            }).catch((err) => {
                console.log(err);
            })
        }, [modal, results, data, setResults]
    )

    /*const PostBooking = () => {
        const promise = axios.post(
            "https://hotelcp.herokuapp.com/booking", {
                "clientName": clientName,
                "phoneNumber": phoneNumber,
                "bookingDate": bookingDate,
                "bookingEndDate": bookingEndDate,
                "roomId": 1
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
    }*/

    return (<>
        <div className={"min-w-full min-h-screen bg-white"} >
            <NavigationBar linkTwo={"Liste des categories"} pageTwo={"/category"} pageOne="/room" linkOne={"Liste des chambres"} buttonText={"Se déconnecter"} redirectPath={"/"}/>
            <div className="ml-2 my-5 flex flex-row gap-4 items-center">
                <div className="flex flex-row gap-3 items-center">
                    <label>Type de chambre :</label>
                    <select
                        name="roomCategories"
                        id="roomCategories"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value={""} disabled></option>
                        <option value={RoomCategory.Double}>Double</option>
                        <option value={RoomCategory.Family}>Familiale</option>
                        <option value={RoomCategory.Suite}>Suite</option>
                    </select>
                </div>
                <div>
                    <button className="text-white px-5 text-center bg-blue-800 rounded-full p-1.5" >Filtrer</button>
                </div>
            </div>
            <BookingDashboard data={results} getValue={GetValues}/>
        </div>
    </>);
}


export default BookingPage;