import React from 'react';
import CharAboutInfo from './char-about-info/CharAboutInfo';
import CharAboutList from './char-about-list/CharAboutList';
import './CharAbout.css';

const CharAbout = (props) => {
    return (
        <div className='char-about-wrapper'>
            <div className='char-about'>
                <CharAboutInfo />
                <CharAboutList />
            </div>
        </div>
    );
}

export default CharAbout;