import React, { useState } from 'react';
import Button from '../../atoms/button';
import './style.scss';
import Search from '../../atoms/search';

const Form = ({ submitBookHandler }) => {
    const [ title, setTitle ] = useState('');
    const [ authors, setAuthors ] = useState('');
    const [ publisher, setPublisher ] = useState('');
    const [ publishedDate, setPublishedDate ] = useState('');

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };
    const authorChangeHandler = (e) => {
        setAuthors([e.target.value]);
    };
    const publisherChangeHandler = (e) => {
        setPublisher(e.target.value);
    };
    const publishedDateChangeHandler = (e) => {
        setPublishedDate(e.target.value);
    };
    const submitForm = (e) => {
        e.preventDefault();
        submitBookHandler({
            title,
            authors,
            publisher,
            publishedDate
        });
    };
    return (
        <div className="row">
            <form onSubmit={ submitForm } className="add-book-form">
                <Search changeHandler={ titleChangeHandler } placeholderText="Enter Title" icon="fas fa-heading" />
                <Search changeHandler={ authorChangeHandler } placeholderText="Enter Author Name(s)" icon="fas fa-user" />
                <Search changeHandler={ publisherChangeHandler } placeholderText="Enter Publisher Name" icon="far fa-user" />
                <Search changeHandler={ publishedDateChangeHandler } type="date" placeholderText="Enter Publishing Date" icon="fas fa-calender-week" />
                <div className="btn-div">
                    <Button type="submit" clickHandler={ submitForm } text="Submit" isTop />
                </div>
            </form>
        </div>
    )
};

export default Form;
