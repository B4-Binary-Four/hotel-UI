import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {connect, save} from "../util/connect";
import '../styles/card.css';
import Spinner from './Spinner';
import '../styles/spinner.css';


const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [card,setCard] = useState<string>("card bg-eo2 max-w-md w-full space-y-8 rounded-lg");
    const [error,setError] = useState<string>("hidden");
    const [visibility,setVisibility] = useState<string>("hidden");

    return (<>
        <Spinner visibility={visibility}/>
        <div className={card} >
            <div className='mt-6 text-center text-2xl font-bold text-stone' >
                <h1 className='font-bold text-black drop-shadow-xl uppercase text-3xl' >Login</h1>
            </div>
            <div className='mt-8 space-y-6' >
                <form className='rounded-md shadow-sm -space-y-px' >
                    <div className='mb-5 space-y-2 text-center flex justify-center' >
                        <input
                            className='lg:w-80 w-60 px-3 py-2 border-transparent rounded-md shadow-md text-sm text-center sm:text-sm focus:outline-none'
                            type={"text"}
                            placeholder="Identifiant"
                            id="username"
                            name='username'
                            value={username}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            required/>
                    </div>
                    <div className='mb-5 space-y-2 flex justify-center'>
                        <input
                            className='text-center lg:w-80 w-60 px-3 py-2 border-transparent rounded-md shadow-md text-sm sm:text-sm focus:outline-none'
                            type={"password"}
                            placeholder="Mot de passe"
                            id="password"
                            name='password'
                            value={password}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            required/>
                    </div>
                </form>
            </div>
            <div className={error}>
                    <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Info</span>
                    <div>
                        Identifiant et/ou Mot de passe invalide
                    </div>
            </div>
            <div className='flex justify-center'>
                <button className='group relative md:text-center flex py-2 mb-2 px-4 text-sm font-medium rounded-md text-white text-center shadow-lg  bg-amber-400'
                        onClick={() => {
                                setVisibility("spinner");
                                setCard("hidden");
                                connect(username,password).then(
                            () => {
                                save(window.btoa(username+":"+password))
                                navigate("/room");
                            }
                        ).catch(error => {
                            setVisibility("hidden");
                            setCard("card bg-eo2 max-w-md w-full space-y-8 rounded-lg")
                            setError("flex justify-center py-3 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800");
                        })}}>Se connecter</button>
            </div>
        </div>
    </>);
}

export default LoginForm;