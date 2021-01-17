import React from 'react';
import './style.scss';

const button = ({ text, clickHandler }) => {
    return (
        <>
            <input type="button" className="create-btn" value= {text} onClick={ clickHandler } />
        </>
    )
};

export default button;
