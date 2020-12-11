import React from 'react';
import './SearchBar.style.css';

export const SearchBar = ({handleChange}) => {
    return (
        <input type="search"
            placeholder="Search Member"
            onChange={handleChange}
        ></input>
    )
}