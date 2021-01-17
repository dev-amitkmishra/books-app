import React from 'react';
import { NoBookFound } from '../../../constants';
import Card from '../../molecules/card';
import './style.scss';

const CardList = ({ books = NoBookFound }) => {
    return (
        <>
            <div className="row">
                {
                    books && books.map((book, index) => {
                        return (
                            <div key={index} className="column">
                                <Card bookInfo={ book.volumeInfo } />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
};

export default CardList;
