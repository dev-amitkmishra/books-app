import React from 'react';
import Card from '../../molecules/card';
import './style.scss';

const cardList = ({ text, books }) => {
    console.log('dsnbfghdsf', books);
    return (
        <>
            <div className="row">
                {
                    books.map((book) => {
                        return (
                            <div className="column">
                                <Card bookInfo={ book.volumeInfo } />
                            </div>
                        )
                    })
                }
                {/* <div className="column">
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
                </div> */}
            </div>
        </>
    )
};

export default cardList;
