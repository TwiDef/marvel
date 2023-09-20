import React from 'react';
import './CharCards.css';
import CharCard from '../char-card/CharCard';

const CharCards = (props) => {
    return (
        <div className='char-cards'>
            <CharCard img={"https://oboi-telefon.ru/wallpapers/56845/37438.jpg"} />
            <CharCard img={"https://oboi-telefon.ru/wallpapers/56845/37438.jpg"} />
            <CharCard img={"https://oboi-telefon.ru/wallpapers/56845/37438.jpg"} />
            <CharCard img={"https://oboi-telefon.ru/wallpapers/56845/37438.jpg"} />
            <CharCard img={"https://oboi-telefon.ru/wallpapers/56845/37438.jpg"} />
            <CharCard img={"https://oboi-telefon.ru/wallpapers/56845/37438.jpg"} />
            <CharCard img={"https://oboi-telefon.ru/wallpapers/56845/37438.jpg"} />
            <CharCard img={"https://oboi-telefon.ru/wallpapers/56845/37438.jpg"} />
            <CharCard img={"https://oboi-telefon.ru/wallpapers/56845/37438.jpg"} />
        </div>
    );
}

export default CharCards;