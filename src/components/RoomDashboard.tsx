import React from "react";
import {IRoom} from "../types/IRoom";
import { Table} from "flowbite-react";

interface Props {
    data: IRoom[];
    getValue?: (e: any) => void
}

const RoomDashboard: React.FC<Props> = ({data, getValue}) => {
    return(
        <div className="w-3/4 mx-auto relative overflow-x-auto shadow-md sm:rounded-lg">
            <Table hoverable={true} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <Table.Head className="text-xs text-gray-700 uppercase bg-gradient-to-r from-sky-300 to-sky-600 dark:bg-gray-700 dark:text-gray-400">
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Id
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Description
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Statut
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Categorie
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Prix
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
                        Nombre de reservations
                    </Table.HeadCell>
                    <Table.HeadCell scope="col" className="px-6 py-3">
      <span className="sr-only">
        Edit
      </span>
                    </Table.HeadCell>
                </Table.Head >
                <Table.Body className="divide-y">
                    {
                        data.map((item) => (
                            <Table.Row className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <Table.Cell scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {item.id}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4">
                                    {item.description}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4">
                                    {item.status}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4">
                                    {item.categoryName}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4">
                                    {item.price}
                                </Table.Cell>
                                <Table.Cell className="px-6 py-4">
                                    {item.bookingCount}
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
    );
}

export default RoomDashboard;