import React from 'react';
import './Body.css';

const Body = (props) => {
    const { array } = props;
    return (
        <div className='array-container'>
            {array.map((value, index) => (
                <div className='array-bar' key={index} style={{ height: `${value}px` }}></div>
            ))}
        </div>
    )
}

export default Body