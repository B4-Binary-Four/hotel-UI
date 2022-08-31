import React from "react";
import { Rating } from "flowbite-react";


const Card:React.FC <{title:string,description:string,price:number,reduction:number}> = (props)  =>{
    const {title,description,price,reduction} = props;
    return (<>
        <div className="relative my-6 hover:shadow-lg hover:shadow-slate-500 md:max-w-sm max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Rating size={"md"}>
                <Rating.Star/>
            </Rating>
            <div className={"text-center"} >
                <h1 className={"w-full text-lg mb-5"} >{title.toUpperCase()}</h1>
                <p className="px-5 md:px-20" >{description}</p>
                <p>PROMO!</p>
                <p><del>{price} Ar</del></p>
                <p>{reduction} Ar</p>
                <button className={"w-full bg-gradient-to-l from-slate-200 via-slate-400 to-slate-500 rounded-lg text-white mt-2"} >Réserver</button>
            </div>
        </div>
    </>);
}

export default Card;