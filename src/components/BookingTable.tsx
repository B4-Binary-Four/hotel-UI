import React,{useEffect,useState} from "react";
import Booking from "../types/Booking";
import list from "../mock/BookingList.json";
import { Table } from "flowbite-react";

const BookingTable : React.FC <{}> = () => {
    const [bookingList,setBookingList] = useState<Array<Booking>>();
    
    useEffect(() => {
        setBookingList(list);
    },[bookingList]);

    return (<>
        <div className="ml-2 my-5 flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-3 items-center">
                <p>Type de chambre :</p>    
                <select>
                    <option>Double</option>
                    <option>Familiale</option>
                    <option>Suite</option>
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