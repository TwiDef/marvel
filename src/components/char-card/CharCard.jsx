import React from 'react';
import './CharCard.css';

const CharCard = ({ img, name }) => {
    return (
        <li className='char-card'>
            <img className='char-card__top' src={img} />
            <div className='char-card__bottom'>
                <span className='char-card__name'>{name}</span>
            </div>
        </li>
    );
}

export default CharCard;