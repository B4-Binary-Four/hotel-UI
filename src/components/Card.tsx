import React from "react";
import { Card as CBox} from "flowbite-react";



const Card:React.FC <{title:string,description:string,price:number,reduction:number,imageSrc:string}> = (props)  =>{
    const {title,description,price,reduction,imageSrc} = props;
    return (<>
        <div className="max-w-sm md:max-w-sm mx-auto my-3 shadow-sm hover:shadow-xl hover:scale-105">
                <CBox imgSrc={imageSrc}>
                    <h5 className="text-xl text-center font-work tracking-tight text-gray-900 dark:text-white">
                        {title.toUpperCase()}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400 px-6 text-center">
                        {description}
                    </p>
                    <strong className="w-full text-center flex gap-3 justify-center items-center">{reduction} Ariary
                        <li className="flex space-x-3 line-through decoration-gray-500">
                            <span className="text-base font-normal leading-tight text-gray-500">
                                {price}
                            </span>
                        </li>
                    </strong>
                </CBox>
            </div>
    </>);
}

export default Card;