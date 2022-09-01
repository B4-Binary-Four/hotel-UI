import React from 'react';
import ClientCard from './ClientCard';
import dina from '../assets/dina_git.png';
import lina from '../assets/lina_git.png';
import oni from '../assets/oni.jpeg';
import judi from '../assets/judi.jpeg';
import amour from '../assets/amour.jpeg';

const Reviews :React.FC <{}> = () => {
  return (<>
        <section className='w-full md:pb-5' >
            <div className={"text-center mb-5 pt-6 uppercase text-xl md:text-2xl font-fair"} >Reviews</div>
            <div className={"items-center flex flex-col md:flex-row md:justify-evenly"} >
                <ClientCard review='Journée inoubliable !' imageSrc={dina} name='Dinasoa' starCount={4}/>
                <ClientCard review='Détente assurée au spa.' imageSrc={lina} name='Liana' starCount={4.95}/>
                <ClientCard review='Le sauna is the place to be !' imageSrc={oni} name='Onitsiky' starCount={4}/>
                <ClientCard review="J'adore leur mini bar !" imageSrc={judi} name='Judicael' starCount={4.5}/>
                <ClientCard review='Séjour agréable je dirais.' imageSrc={amour} name='Amour' starCount={3}/>
            </div>
        </section>
  </>);
}

export default Reviews;