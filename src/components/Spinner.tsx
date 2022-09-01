import React from 'react';

const Spinner : React.FC <{visibility:string}> = (props) => {
    const {visibility} = props;
    return(<>
        <div className={visibility}></div>
    </>);
}

export default Spinner;