import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {connect, save} from "../util/connect";

const LoginForm = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("login");

    return (<>
        <div className='text-white mt-20 w-96 text-center h-max' >
            <div className='mb-5 py-5' >
                <h1 className='font-bold uppercase text-3xl' >{message}</h1>
            </div>
            <div className='mt-10 w-full' >
                <form className='grid grid-cols-1 gap-5' >
                    <div>
                        <input
                            className='w-64 md:w-96 border-white border-solid border-2 pl-3 py-2  focus:outline-none bg-transparent rounded-xl placeholder:text-md text-md placeholder:text-white'
                            type={"text"}
                            placeholder="Identifiant"
                            id="username"
                            name='username'
                            value={username}
                            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                            required/>
                    </div>
                    <div>
                        <input
                            className='w-64 md:w-96 border-white border-solid border-2 pl-3 py-2  focus:outline-none bg-transparent rounded-xl placeholder:text-md text-md placeholder:text-white'
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
            <div className='w-full mt-7 flex justify-center items-center'>
                <button className='w-64 md:w-96 bg-gradient-to-r rounded-xl text-lg py-1 from-sky-300 via-sky-600 to-sky-800'
                        onClick={() => connect(username,password).then(
                            () => {
                                save(window.btoa(username+":"+password))
                                navigate("/room");
                            }
                        )}>Se connecter</button>
            </div>
        </div>
    </>);
}

export default LoginForm;