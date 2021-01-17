import React from 'react';
import Card from '../../molecules/card';
import './style.scss';

const cardList = ({ text }) => {
    return (
        <>
            <div className="row">
                <div className="column">
                    <Card />
                </div>
                <div className="column">
                    <Card />
                </div>
                <div className="column">
                    <Card />
                </div>
                <div className="column">
                    <Card />
                </div>
            </div>
        </>
    )
};

export default cardList;
