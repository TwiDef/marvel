import React, { useRef } from 'react';
import './CharCard.css';

const CharCard = (props) => {

    const charRef = useRef()

    return (
        <li
            className='char-card'
            tabIndex={0}
            ref={charRef}
            onClick={() => {
                props.onFocus(charRef)
                props.onCharSelected(props.id)
            }}
        >
            <img className='char-card__top' src={props.img} />
            <div className='char-card__bottom'>
                <span className='char-card__name'>{props.name}</span>
            </div>
        </li>
    );

}

export default CharCard;