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
                <div className="font-work text-center px-8 md:px-28" >
                        L’hôtel CP occupe un immeuble de 30 étages.
                        Appartenant à la même famille depuis les années 40, ce sont depuis trois générations qui le  gèrent successivement.

                        D’une capacité de 98 chambres, le CP est idéalement situé à proximité de la mer.
                        Un parking privé à 290m de l’hôtel  vous est proposé.

                        L’hôtel est entièrement non fumeur et n’accepte pas les animaux, sauf chiens guides ou d’assistance.

                        Notre réception, assurée 7 jours sur 7 et 24H sur 24, est à votre écoute pour tout renseignement et réservation.
                </div>
            </div>
        </section>
    </>);
}

export default AboutUs;