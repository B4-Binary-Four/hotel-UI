import React from "react";

const Footer : React.FC = () => {
    return (<>
        <footer className={"w-full text-white py-2 flex justify-between shadow-2xl rounded-sm items-center bg-gradient-to-r from-sky-500 via-sky-600 to-sky-900"}>
            <div className={"text-center ml-2"}>
                <h2>Nos contacts</h2>
                <p>+261 34 12 345 67</p>
                <p>+261 33 12 345 67</p>
            </div>
            <div className={"text-center"}>
                <h2>Nos messageries</h2>
                <p>reso@monsite.com</p>
                <p>sore@monsite.com</p>
            </div>
            <div className={"text-center mr-2"}>
                <h2>Copyright (C)</h2>
            </div>
        </footer>
    </>);
}

export default Footer;