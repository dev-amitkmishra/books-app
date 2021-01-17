import React from 'react';
import Title from "../../atoms/title";
import SubTitle from "../../atoms/subtitle";
import './style.scss';
import { BlockSubTitle, BlockTitle } from '../../../constants';

const card = ({ text }) => {
    return (
        <>
            <div className="card">
                <Title title={ BlockTitle } cardTitleColour="card-title" />
                <div className="card-div">
                    <span>Author: </span><SubTitle subTitle={ BlockSubTitle }  cardSubTitleColor="card-subTitle" />
                </div>
                <div className="card-div">
                    <span>Publisher: </span><SubTitle subTitle={ BlockSubTitle }  cardSubTitleColor="card-subTitle" />
                </div>
                <div className="card-div">
                    <span>Published Date: </span><SubTitle subTitle={ BlockSubTitle }  cardSubTitleColor="card-subTitle" />
                </div>
            </div>
        </>
    )
};

export default card;
