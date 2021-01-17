import React from 'react';
import Title from "../../atoms/title";
import SubTitle from "../../atoms/subtitle";
import './style.scss';

const card = ({ bookInfo }) => {
    debugger;
    const { title, authors, publisher, publishedDate } = bookInfo;
    return (
        <>
            <div className="card">
                <Title title={ title } cardTitleColour="card-title" />
                <div className="card-div">
                    <span>Author: </span><SubTitle subTitle={ authors && authors.length > 0 ? authors.join() : 'NA' }  cardSubTitleColor="card-subTitle" />
                </div>
                <div className="card-div">
                    <span>Publisher: </span><SubTitle subTitle={ publisher || 'NA' }  cardSubTitleColor="card-subTitle" />
                </div>
                <div className="card-div">
                    <span>Published Date: </span><SubTitle subTitle={ publishedDate }  cardSubTitleColor="card-subTitle" />
                </div>
            </div>
        </>
    )
};

export default card;
