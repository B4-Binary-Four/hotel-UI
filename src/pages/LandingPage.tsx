import React from "react";
import NavigationBar from "../components/NavigationBar";
import Offers from "../components/Offers";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Box from "../components/ImageBox";
import Features from "../components/Features";

const LandingPage : React.FC = () => {
    return(<>
        <div className={"min-w-full min-h-screen bg-white"} >
            <NavigationBar pageTwo={"/"} pageOne={"/"} redirectPath={"/login"} linkOne={"Nos offres"} linkTwo={"À propos de nous"} buttonText={"Se connecter"}/>
            <Box/>
            <Offers/>
            <AboutUs/>
            <Features/>
            <Footer/>
        </div>
    </>);
}


export default LandingPage;