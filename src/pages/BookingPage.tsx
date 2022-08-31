import React from "react";
import BookingTable from "../components/BookingTable";
import NavigationBar from "../components/NavigationBar";


const BookingPage : React.FC = () => {
    return (<>
        <div className={"min-w-full min-h-screen bg-gradient-to-b from-sky-700 via-sky-500 to-sky-300"} >
            <NavigationBar linkOne={"Liste des chambres"} buttonText={"Se déconnecter"} redirectPath={"/"}/>
            <BookingTable/>
        </div>
    </>);
}


export default BookingPage;