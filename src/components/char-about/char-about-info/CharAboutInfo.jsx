import React from 'react';
import './CharAboutInfo.css';
import ButtonLink from '../../buttonLink/ButtonLink';

const CharAboutInfo = ({ name, description, thumbnail, homepage, wiki }) => {
    return (
        <div className='char-about-info'>

            <div className='char-about__notion'>
                <div className='char-about__img'>
                    <img src={thumbnail} alt={name} />
                </div>
                <div className="char-about__inter">
                    <h4>{name}</h4>
                    <div className="char-about__btns">
                        <ButtonLink href={homepage} color="#9F0013" text="HOMEPAGE" />
                        <ButtonLink href={wiki} text="WIKI" />
                    </div>
                </div>
            </div>
            <p className="char-about__descr">
                {description}
            </p>
        </div>
    );
}

export default CharAboutInfo;