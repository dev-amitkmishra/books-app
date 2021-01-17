import React from 'react';
import './style.scss';

const button = ({ text, isTop, clickHandler }) => {
    return (
        <>
            <input 
                type="button"
                className={`create-btn ${ !isTop ? 'top' : ''}`}
                value= { text }
                onClick={ clickHandler }
            />
        </>
    )
};

export default button;
