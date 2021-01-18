import React from 'react';
import Title from "../../atoms/title";
import SubTitle from "../../atoms/subtitle";
import './style.scss';

const card = ({ bookInfo }) => {
    const { title, authors, publisher, publishedDate } = bookInfo;
    return (
        <div className="card">
            <Title title={ title } cardTitle="card-title ellipses" />
            <div className="card-div ellipses">
                <span>Author: </span><SubTitle subTitle={ authors && authors.length > 0 ? authors.join() : 'NA' }  cardSubTitle="card-subTitle" />
            </div>
            <div className="card-div ellipses">
                <span>Publisher: </span><SubTitle subTitle={ publisher || 'NA' }  cardSubTitle="card-subTitle" />
            </div>
            <div className="card-div ellipses">
                <span>Published Date: </span><SubTitle subTitle={ publishedDate }  cardSubTitle="card-subTitle" />
            </div>
        </div>
    )
};

export default card;
