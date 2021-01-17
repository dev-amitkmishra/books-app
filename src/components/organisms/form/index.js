import React from 'react';
import Label from '../../atoms/label';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import './style.scss';

const form = () => {
    const submitBookHandler = () => {
        console.log('dmnfbhdsfsd');
    };
    return (
        <>
            <div>
                <Label type="text" text="title" />
                <Input type="text" placeholderText="Enter Title" name="title" />
            </div>
            <div>
                <Label type="text" text="author" />
                <Input type="text" placeholderText="Enter Author Name(s)" name="author" />
            </div>
            <div>
                <Label type="text" text="publisher" />
                <Input type="text" placeholderText="Enter Publisher Name" name="publisher" />
            </div>
            <div>
                <Label type="text" text="publishedDate" />
                <Input type="date" placeholderText="Enter Publishing Date" name="publishedDate" />
            </div>
            <Button clickHandler={ submitBookHandler } text="Submit" isTop />
        </>
    )
};

export default form;
