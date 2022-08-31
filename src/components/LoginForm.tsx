import React from 'react';
import {Link} from "react-router-dom";

const LoginForm = () => {
    return (<>
        <div className='text-white mt-20 w-96 text-center h-max' >
            <div className='mb-5 py-5' >
                <h1 className='font-bold uppercase text-3xl' >Login</h1>
            </div>
            <div className='mt-10 w-full' >
                <form className='grid grid-cols-1 gap-5' >
                    <div>
                        <input
                            className='w-64 md:w-96 border-white border-solid border-2 pl-3 py-2  focus:outline-none bg-transparent rounded-xl placeholder:text-md text-md placeholder:text-white'
                            type={"text"}
                            placeholder="Username"
                            id="username"
                            name='username'
                            required/>
                    </div>
                    <div>
                        <input
                            className='w-64 md:w-96 border-white border-solid border-2 pl-3 py-2  focus:outline-none bg-transparent rounded-xl placeholder:text-md text-md placeholder:text-white'
                            type={"password"}
                            placeholder="Password"
                            id="password"
                            name='password'
                            required/>
                    </div>
                </form>
            </div>
            <div className='w-full mt-7 flex justify-center items-center'>
                <button className='w-64 md:w-96 bg-gradient-to-r rounded-xl text-lg py-1 from-sky-300 via-sky-600 to-sky-800' ><Link to="/room">Sign In</Link></button>
            </div>
        </div>
    </>);
}

export default LoginForm;