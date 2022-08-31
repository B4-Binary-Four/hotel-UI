import React from "react";
import NavigationBar from "../components/NavigationBar";
import Offers from "../components/Offers";


const LandingPage : React.FC = () => {
    return(<>
        <div className={"min-w-full min-h-screen bg-gradient-to-b from-sky-700 via-sky-500 to-sky-300"} >
            <NavigationBar/>
            <Offers/>
        </div>
    </>);
}


export default LandingPage;