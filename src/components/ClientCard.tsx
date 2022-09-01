import React from 'react';
import { Card, Rating } from 'flowbite-react';

const ClientCard : React.FC <{review:string,imageSrc:string,name:string,starCount:number}> = (props) => {
    const {imageSrc,name,starCount,review} = props;
    return (
        <div className="max-w-sm md:max-w-sm mb-2 shadow-sm hover:shadow-xl hover:scale-105">
            <Card>
                <div className="flex flex-col items-center gap-3 pb-5">
                    <img
                            className="mb-3 h-24 w-24 rounded-full shadow-lg"
                            src={imageSrc}
                            alt={name}
                    />
                    <h5 className="mb-1 text-xl font-fair text-gray-900 dark:text-white">
                            {name}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                            <Rating size={"md"}>
                                <Rating.Star/> {starCount}
                            </Rating>
                    </span>
                    <span className="text-md font-work text-center text-gray-500 dark:text-gray-400">
                            {review}
                    </span>
                </div>
            </Card>
        </div>
  )
}

export default ClientCard;