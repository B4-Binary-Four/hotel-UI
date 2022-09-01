import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo_nobg.png";

const NavigationBar : React.FC <{linkOne?:string,linkTwo?:string,buttonText:string,redirectPath:string,pageOne:string,pageTwo:string}> = (props) => {
    const {linkOne,linkTwo,buttonText,redirectPath,pageOne,pageTwo} = props;
    return(<>

        <header>
            <nav className={"w-full font-work bg-opacity-95 md:text-lg text-sm text-white py-2.5 md:py-3.5 flex justify-between shadow-lg rounded-sm items-center bg-amber-400"} >
            <div className={"ml-1 md:ml-3 flex items-center justify-center "} >
            <img src={logo} alt="logo" className="w-12 h-12 md:w-16 md:h-16 shadow-md rounded-full hover:shadow-lg hover:shadow-yellow-500"/>
                </div>
        <div className={"flex flex-row gap-1 md:gap-10 items-center"} >
            <ul className={"flex flex-row gap-3 md:gap-6"} >
                        <li><Link to={pageTwo}>{linkTwo}</Link></li>
                        <li><Link to={pageOne}>{linkOne}</Link></li>
                    </ul>
                    <button className={"mr-3 text-center bg-blue-800 rounded-full shadow-md hover:shadow-lg p-1.5 md:p-2.5 hover:bg-blue-600"}><Link to={redirectPath}>{buttonText}</Link></button>
                </div>
            </nav>
        </header>

    </>);
}

export default NavigationBar;