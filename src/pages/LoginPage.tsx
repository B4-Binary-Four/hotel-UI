import React from 'react'
import LoginForm from '../components/LoginForm';

const LoginPage:React.FC = () => {
    return (<>
            <div className='flex justify-center min-h-screen min-w-full bg-gradient-to-b from-sky-700 via-sky-500 to-sky-300' >
                <LoginForm/>
            </div>
        </>
    );
}

export default LoginPage;