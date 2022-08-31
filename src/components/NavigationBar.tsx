import React from "react";

const NavigationBar : React.FC = () => {
    return(<>

        <header>
            <nav className={"w-full text-white py-2 flex justify-between shadow-2xl rounded-sm items-center bg-gradient-to-r from-sky-500 via-sky-600 to-sky-900"} >
                <div className={"ml-3"} >logo</div>
                <div className={"flex flex-row gap-10 items-center"} >
                    <ul className={"flex flex-row gap-5"} >
                        <li>Nos offres</li>
                        <li>À propos de nous</li>
                    </ul>
                    <button className={"mr-3 text-center bg-gradient-to-r from-sky-400 via-sky-500 to-sky-700 rounded-full p-1.5"}>Se connecter</button>
                </div>
            </nav>
        </header>

    </>);
}


export default NavigationBar;