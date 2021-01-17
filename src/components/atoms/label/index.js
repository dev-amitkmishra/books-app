import React from 'react';

const label = ({ type, text }) => {
    return (
        <>
            <label htmlFor={ type }><b>{ text }</b></label>
        </>
    )
}

export default label;
