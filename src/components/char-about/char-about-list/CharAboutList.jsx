import React from 'react';
import CharAboutListItem from '../char-about-list-item/CharAboutListItem';
import './CharAboutList.css';

const CharAboutList = (props) => {
    return (
        <div className='char-about-list'>
            <h4>Comics:</h4>
            <ul>
                <CharAboutListItem />
                <CharAboutListItem />
                <CharAboutListItem />
                <CharAboutListItem />
                <CharAboutListItem />
                <CharAboutListItem />
                <CharAboutListItem />
                <CharAboutListItem />
                <CharAboutListItem />
                <CharAboutListItem />
            </ul>
        </div>
    );
}

export default CharAboutList;