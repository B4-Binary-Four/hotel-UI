import React from "react";

const AboutUs: React.FC = () => {
    return(<>
        <section className={"w-full mt-7 mb-5"} id="about">
            <div className={"text-center uppercase text-2xl mb-3"} >À propos de nous</div>
            <div className={"flex flex-col md:flex-row items-center bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"}>
                <div className={"w-full bg-blue-400 h-56 flex justify-center items-center"}>Photo</div>
                <div className={"w-full bg-blue-400 h-56 border border-l-1 flex justify-center items-center"} >lorem ipsum</div>
            </div>
        </section>
    </>);
}

export default AboutUs;