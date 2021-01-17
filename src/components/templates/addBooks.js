import React from 'react';
import CardList from '../organisms/cardList';
import Form from '../organisms/form';

const addBook = (props) => {
    return (
        <>
            <Form submitBookHandler={ props.submitBookHandler } />
            <CardList books={ props.books } />
        </>
    )
}

export default addBook;
