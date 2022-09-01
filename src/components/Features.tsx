import React from 'react';
import Icons from './Icons';
import pool from '../assets/pool.png';
import roomService from '../assets/room-service.png';
import massage from '../assets/massage.png';
import miniBar from '../assets/minibar.png';
import sauna from '../assets/sauna.png';
import parking from '../assets/parking.png';

const Features : React.FC = () => {
  return (<>
    <section className={"w-full bg-gray-100 py-12 md:pb-5"}>
        <div className={"text-center mb-9 uppercase text-xl md:text-2xl font-fair"} >Caractéristiques</div>
        <div className={"items-center flex flex-col md:grid md:grid-cols-3"} >
            <Icons imageSrc={pool} title="piscine" />
            <Icons imageSrc={roomService} title="room service" />
            <Icons imageSrc={massage} title="massage" />
            <Icons imageSrc={miniBar} title="mini bar" />
            <Icons imageSrc={sauna} title="sauna" />
            <Icons imageSrc={parking} title="parking" />
        </div>
    </section>
  </>);
}

export default Features;