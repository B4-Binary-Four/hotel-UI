import React from "react";
import Card from "./Card";


const Offers : React.FC = () => {
    return (<>
        <section className={"w-full mt-3.5"}>
            <div className={"text-center uppercase text-2xl"} >Nos offres</div>
            <div className={"items-center flex flex-col md:flex-row md:justify-evenly"} >
                <Card title={"chambre double"} description={"Equipée d'un lit double place, de Canalsat et d'eau chaude"} price={250_000} reduction={100_000}/>
                <Card title={"chambre familiale"} description={"Equipée de 2 lits double place, de Canalsat et d'eau chaude"} price={350_000} reduction={200_000}/>
                <Card title={"suite"} description={"Equipée d'un lit double place, de Canalsat et d'eau chaude"} price={450_000} reduction={300_000}/>
            </div>
        </section>
    </>);
}


export default Offers;