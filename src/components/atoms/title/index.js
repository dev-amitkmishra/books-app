import React from 'react';
import './style.scss';

const title = ({ title, appTitleColor, cardTitleColour }) => {
    return (
        <>
            <div className={`title ${appTitleColor? appTitleColor : ''} ${cardTitleColour ? cardTitleColour : ''}`}>{ title }</div>
        </>
    )
};

export default title;