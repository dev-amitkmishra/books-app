import React from 'react';
import './style.scss';

const search = ({ searchText, placeholderText, changeHandler, icon, type = "text" }) => {
    return (
        <>
            <div className="search">
                <i className={`search-icon" ${icon}`}></i>
                <input type={ type } aria-label="Search" className="search-input" placeholder={ placeholderText } onChange={(e) => changeHandler(e)} />
            </div>
        </>
    )
};

export default search;
