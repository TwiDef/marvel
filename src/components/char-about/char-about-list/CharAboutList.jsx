import React from 'react';
import CharAboutListItem from '../char-about-list-item/CharAboutListItem';
import './CharAboutList.css';

const CharAboutList = ({ comics }) => {
    return (
        <div className='char-about-list'>
            <h4>Comics:</h4>
            <ul>
                {
                    comics.length ?
                        comics.map((item, i) => {
                            if (i > 9) return
                            return <CharAboutListItem key={i} name={item.name} />
                        }) :
                        <li className='char-about-list-noinfo'>There is no comics with this character</li>
                }
            </ul>
        </div>
    );
}

export default CharAboutList;