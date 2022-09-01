import React from "react";
import logo from "../assets/logo.png"

const AboutUs: React.FC = () => {
    return(<>
        <section className={"w-full mt-8 mb-6 py-16"} id="about">
            <div className={"text-center uppercase text-xl md:text-2xl font-fair mb-5 md:mb-1"} >À propos de nous</div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center" >
                <div className="w-full flex justify-center md:max-w-none">
                    <img src={logo} alt="logo" className="w-48 h-48 my-4 md:my-0 rounded-full shadow-lg hover:scale-105 hover:shadow-xl" />
                </div>
                <div className="font-work text-center px-8 md:px-28" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam quisquam labore,
                     dicta tenetur illum. 
                     Officiis qui quam voluptatibus eaque suscipit
                     modi repellendus quaerat natus, ipsum reprehenderit 
                     quibusdam recusandae illo!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officia dolorem fuga possimus omnis amet iusto culpa ex hic quam dicta cumque, consequuntur reprehenderit temporibus distinctio id quia quod provident?
                </div>
            </div>
        </section>
    </>);
}

export default AboutUs;