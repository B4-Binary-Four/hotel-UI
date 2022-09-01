import React,{useEffect,useState} from "react";
import Booking from "../types/Booking";
import list from "../mock/BookingList.json";
import { Table } from "flowbite-react";
import RoomCategory from "../types/RoomCategory";
import {BookingProps} from "../types/BookingProps";

const BookingDashboard : React.FC<BookingProps> = ({data, getValue}) => {
    const [bookingList,setBookingList] = useState<Array<Booking>>();

    return (<>
        <div className="w-3/4 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
            <Table hoverable={true} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <Table.Head className="text-xs text-white uppercase bg-amber-400 dark:bg-gray-700 dark:text-gray-400">
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Id
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Client
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Numero
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Reservation
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Fin de reservation
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Numero de chambre
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Date de reservation
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Categorie
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
      <span className="sr-only">
        Changer
      </span>
                    </Table.HeadCell>
                </Table.Head >
                <Table.Body className="divide-y">
                    {
                        data.map((item) => (
                            <Table.Row className="bg-gray-100 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <Table.Cell scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {item.id}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4">
                                    {item.clientName}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4">
                                    {item.phoneNumber}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4">
                                    {item.bookingDate}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4">
                                    {item.bookingEndDate}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4">
                                    {item.roomId}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4">
                                    {item.creationDate}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4">
                                    {item.roomCategoryName}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4">
                                    <a
                                        className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                        onClick={getValue}
                                    >
                                        Changer
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
        </>);
}

export default BookingDashboard;