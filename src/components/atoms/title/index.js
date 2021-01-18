import React from 'react';
import './style.scss';

const title = ({ title, appTitle, cardTitle }) => {
    return (
        <div className={`title ${appTitle? appTitle : ''} ${cardTitle ? cardTitle : ''}`} title={ title }>{ title }</div>
    )
};

export default title;
