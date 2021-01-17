import React, { useState } from 'react';
import Label from '../../atoms/label';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import './style.scss';

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
        <>
            <form onSubmit={ submitForm }>
                <div>
                    <Label type="text" text="title" />
                    <Input type="text" placeholderText="Enter Title" name="title" value={ title } changeHandler={ titleChangeHandler } />
                </div>
                <div>
                    <Label type="text" text="author" />
                    <Input type="text" placeholderText="Enter Author Name(s)" name="author" value={ authors } changeHandler={ authorChangeHandler } />
                </div>
                <div>
                    <Label type="text" text="publisher" />
                    <Input type="text" placeholderText="Enter Publisher Name" name="publisher" value={ publisher } changeHandler={ publisherChangeHandler } />
                </div>
                <div>
                    <Label type="text" text="publishedDate" />
                    <Input type="date" placeholderText="Enter Publishing Date" name="publishedDate" value={ publishedDate } changeHandler={ publishedDateChangeHandler } />
                </div>
                <Button type="submit" clickHandler={ submitForm } text="Submit" isTop />
            </form>
        </>
    )
};

export default Form;
