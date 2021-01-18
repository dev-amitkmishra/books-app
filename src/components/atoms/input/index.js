import React from 'react';

const input = ({ type, name, value, placeholderText, changeHandler }) => {
    return (
        <input
            type={ type }
            placeholder={ placeholderText }
            name={ name }
            value={ value }
            onChange={ (e) => changeHandler(e) }
            required>
        </input>
    )
}

export default input;
