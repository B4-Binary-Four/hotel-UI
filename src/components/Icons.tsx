import React from 'react';

const Icons :React.FC <{imageSrc:string,title:string}> = (props) => {
    const{ imageSrc, title} = props;
    return (
    <div className='my-2 md:my-0 mx-auto'>
        <img alt='icon' src={imageSrc} className="hover:scale-105 hover:shadow-xl shadow-md bg-white w-20 h-20 rounded-full mx-auto"/>
        <h1 className='text-center text-md font-work my-2 uppercase'>{title}</h1>
    </div>
  );
}

export default Icons;