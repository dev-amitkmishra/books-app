import React from 'react';

const input = ({ type, name, placeholderText }) => {
    return (
        <>
            <input type={ type } placeholder={ placeholderText } name={ name } required></input>
        </>
    )
}

export default input;
