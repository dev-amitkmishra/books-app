import React from 'react';
import './style.scss';

const subTitle = ({ subTitle, appSubTitle, cardSubTitleColor }) => {
    return (
        <>
            <span className={`subTitle ${appSubTitle} ${cardSubTitleColor}`} title={ subTitle }>{ subTitle }</span>
        </>
    )
};

export default subTitle;
