import React from 'react';
import { SearchInputPlaceholdertext } from '../../../constants';
import './style.scss';

const search = ({ searchText, searchHandler }) => {
    return (
        <>
            <div className="search">
                <i className="fas fa-search search-icon"></i>
                <input type="text" aria-label="Search" className="search-input" placeholder={ SearchInputPlaceholdertext } value={ searchText } onChange={(e) => searchHandler(e)} />
            </div>
        </>
    )
};

export default search;
