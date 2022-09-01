import React from "react";
import BookingTable from "../components/BookingTable";
import NavigationBar from "../components/NavigationBar";

const BookingPage : React.FC = () => {
    return (<>
        <div className={"min-w-full min-h-screen bg-white"} >
            <NavigationBar linkTwo={"Liste des categories"} pageTwo={"/category"} pageOne="/room" linkOne={"Liste des chambres"} buttonText={"Se déconnecter"} redirectPath={"/"}/>
            <BookingTable/>
        </div>
    </>);
}


export default BookingPage;