import React,{useEffect,useState} from "react";
import Booking from "../types/Booking";
import list from "../mock/BookingList.json";
import { Table } from "flowbite-react";
import RoomCategory from "../types/RoomCategory";

const BookingTable : React.FC <{}> = () => {
    const [bookingList,setBookingList] = useState<Array<Booking>>();
    
    useEffect(() => {
        setBookingList(list);
    },[bookingList]);

    return (<>
        <div className="ml-2 my-5 flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-3 items-center">
                <label>Type de chambre :</label>    
                <select 
                    name="roomCategories" 
                    id="roomCategories" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value={RoomCategory.Double}>Double</option>
                    <option value={RoomCategory.Family}>Familiale</option>
                    <option value={RoomCategory.Suite}>Suite</option>
                </select>
            </div>
            <div>
                <button className="text-white text-center bg-gradient-to-r from-sky-400 via-sky-500 to-sky-700 rounded-full p-1.5" >Filtrer</button>
            </div>
        </div>
        <Table striped={true}>
            <Table.Head>
                <Table.HeadCell>Nom du client</Table.HeadCell>
                <Table.HeadCell>Contact</Table.HeadCell>
                <Table.HeadCell>Type de chambre</Table.HeadCell>
                <Table.HeadCell>Date de réservation</Table.HeadCell>
                <Table.HeadCell>Effectué le </Table.HeadCell>
                <Table.HeadCell>Numéro de chambre</Table.HeadCell>
            </Table.Head>
            <Table.Body>
                {
                    bookingList?.map(booking => (
                        <Table.Row>
                            <Table.Cell>{booking?.clientName}</Table.Cell>
                            <Table.Cell>{booking?.phoneNumber}</Table.Cell>
                            <Table.Cell>{booking?.roomCategoryName}</Table.Cell>
                            <Table.Cell>{booking?.bookingDate}</Table.Cell>
                            <Table.Cell>{booking?.creationDate}</Table.Cell>
                            <Table.Cell>{booking?.roomId}</Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
            
        </Table>
    </>);
}

export default BookingTable;