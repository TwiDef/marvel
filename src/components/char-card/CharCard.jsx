import React from 'react';
import './CharCard.css';

const CharCard = ({ img }) => {
    return (
        <div className='char-card'>
            <img className='char-card__top' src={img} />
            <div className='char-card__bottom'>
                <span className='char-card__name'>ABYSS</span>
            </div>
        </div>
    );
}

export default CharCard;