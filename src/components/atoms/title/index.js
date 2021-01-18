import React from 'react';
import './style.scss';

const title = ({ title, appTitle, cardTitleColour }) => {
    return (
        <>
            <div className={`title ${appTitle? appTitle : ''} ${cardTitleColour ? cardTitleColour : ''}`} title={ title }>{ title }</div>
        </>
    )
};

export default title;
