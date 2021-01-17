import React from 'react';

const label = ({ type, text }) => {
    return (
        <>
            <label for={ type }><b>{ text }</b></label>
        </>
    )
}

export default label;
