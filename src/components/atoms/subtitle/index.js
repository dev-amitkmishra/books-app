import React from 'react';
import './style.scss';

const subTitle = ({ subTitle, appSubTitle, cardSubTitle }) => {
    return (
        <span className={`subTitle ${appSubTitle} ${cardSubTitle}`} title={ subTitle }>{ subTitle }</span>
    )
};

export default subTitle;
