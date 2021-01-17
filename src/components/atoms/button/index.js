import React from 'react';
import './style.scss';

const button = ({ text, type, isTop, clickHandler }) => {
    return (
        <>
            <input 
                type={ type }
                className={`create-btn ${ !isTop ? 'top' : ''}`}
                value= { text }
                onClick={ clickHandler }
            />
        </>
    )
};

export default button;
