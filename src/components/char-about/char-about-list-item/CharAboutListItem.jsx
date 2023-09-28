import React from 'react';
import './CharAboutListItem.css';

const CharAboutListItem = ({ name }) => {
    return (
        <li className='char-about-list-item'>
            <span>{name}</span>
        </li>
    );
}

export default CharAboutListItem;