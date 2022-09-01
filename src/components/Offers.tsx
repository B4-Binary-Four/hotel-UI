import React, {useEffect, useState} from "react";
import Card from "./Card";
import pic1 from '../assets/double.jpg';
import pic2 from '../assets/familial.jpg';
import pic3 from '../assets/room_one.jpg';
import axios from "axios";
import {ICategory} from "../types/ICategory";


const Offers : React.FC = () => {
    const [results, setResults] = useState<ICategory[]>([])
    const pics = [pic1, pic2, pic3];
    const desc = [ "L'offre qui vous emmenera loin", "Voyez comme vous le sentez" ,"Un peu modeste mais fun" ]

    useEffect(() => {
            const promise = axios.get("http://localhost:8080/roomCategories",
                { headers: {authorization: `Basic ${window.localStorage.getItem("token")}`} });
            promise.then((response) => {
                setResults(response.data);
            }).catch((err) => {
                console.log(err);
            })
        }, [results, setResults]
    )

    return (<>
        <section className={"w-full bg-gray-100 md:pb-5"} id="offers">
            <div className={"text-center mb-5 pt-6 uppercase text-xl md:text-2xl font-fair"} >Nos offres</div>
            <div className={"items-center flex flex-col md:flex-row md:justify-evenly"} >
                {results.slice(0,3).map((item,index)=>(
                    <Card imageSrc={pics[index]} title={item.categoryName} description={desc[index]} price={item.price+1000} reduction={item.price}/>
                ))}
            </div>
        </section>
    </>);
}


export default Offers;