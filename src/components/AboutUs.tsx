import React from "react";
import { Card } from "flowbite-react";
import fake_hotel from "../assets/mock_hotel.jpg"

const AboutUs: React.FC = () => {
    return(<>
        <section className={"w-full mt-8 mb-6"} id="about">
            <div className={"text-center uppercase text-2xl mb-5"} >À propos de nous</div>
            <div className="max-w-sm mx-auto">
                <Card imgSrc={fake_hotel}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Coding Pals Hotel
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Venez comme vous le sentez.
                    </p>
                </Card>
            </div>
        </section>
    </>);
}

export default AboutUs;