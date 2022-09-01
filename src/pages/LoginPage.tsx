import React from 'react'
import LoginForm from '../components/LoginForm';

const LoginPage:React.FC = () => {
    return (<>
            <div className='flex bg-bgl justify-center items-center min-h-screen min-w-full' >
                <LoginForm/>
            </div>
        </>
    );
}

export default LoginPage;