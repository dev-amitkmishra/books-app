import React from 'react';
import './style.scss';

const subTitle = ({ subTitle, appSubTitleColor, cardSubTitleColor }) => {
    return (
        <>
            <span className={`subTitle ${appSubTitleColor} ${cardSubTitleColor}`} title={ subTitle }>{ subTitle }</span>
        </>
    )
};

export default subTitle;
