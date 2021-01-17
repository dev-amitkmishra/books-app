import React from 'react';
import './style.scss';

const search = ({ searchText }) => {
    return (
        <>
            <div className="search">
                <i className="fas fa-search search-icon"></i>
                <input type="text" className="search-input" value={ searchText } />
            </div>
        </>
    )
};

export default search;
