import React from "react";
import Card from "./Card";
import double from '../assets/double.jpg';
import family from '../assets/familial.jpg';
import suite from '../assets/room_one.jpg';


const Offers : React.FC = () => {
    return (<>
        <section className={"w-full bg-gray-100 md:pb-5"} id="offers">
            <div className={"text-center mb-5 pt-4 uppercase text-xl md:text-2xl font-fair"} >Nos offres</div>
            <div className={"items-center flex flex-col md:flex-row md:justify-evenly"} >
                <Card imageSrc={double} title={"chambre double"} description={"Equipée d'un lit double place, de Canalsat et d'eau chaude"} price={250_000} reduction={100000}/>
                <Card  imageSrc={family} title={"chambre familiale"} description={"Equipée de 2 lits double place, de Canalsat et d'eau chaude"} price={350_000} reduction={200_000}/>
                <Card imageSrc={suite} title={"suite"} description={"Equipée d'un lit double place, de Canalsat et d'eau chaude"} price={450_000} reduction={300_000}/>
            </div>
        </section>
    </>);
}


export default Offers;