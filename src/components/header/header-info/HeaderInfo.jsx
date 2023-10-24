import React, { useState, useEffect } from 'react';

import ButtonLink from '../../buttonLink/ButtonLink';
import Mjolhir from './../../../resources/img/mjolnir.png';
import Shield from './../../../resources/img/shield.png';
import useMarvelService from './../../../services/MarvelService';
import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage';

import './HeaderInfo.css';

const HeaderInfo = () => {

    const [char, setChar] = useState({})
    const { loading, error, getCharacter, clearError } = useMarvelService()

    useEffect(() => {
        updateChar()
        const timerId = setInterval(updateChar, 60000)
        return () => {
            clearInterval(timerId)
        }
    }, [])

    const updateChar = () => {
        clearError()
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        getCharacter(id)
            .then(onCharLoaded)
    }

    const onCharLoaded = (char) => {
        setChar(char)
    }

    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error) ? <View char={char} /> : null

    return (
        <div className='headerInfo'>
            <div className="headerInfo-left">
                {errorMessage}
                {spinner}
                {content}
                {/* {loading ? <Spinner /> : <View char={char} />} */}
            </div>
            <div className="headerInfo-right">
                <h4 className='headerInfo-title'>
                    Random character for today! <br />
                    Do you want to get to know him better?
                </h4>
                <h4 className='headerInfo-title'>
                    Or choose another one
                </h4>
                <div style={{ width: "101px" }} onClick={updateChar}>
                    <ButtonLink color="#9F0013" text="TRY IT" />
                </div>
            </div>

            <img className='header-bgimg__first' src={Mjolhir} alt="" />
            <img className='header-bgimg__second' src={Shield} alt="" />
        </div>
    );

}

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki } = char
    return (
        <div className='headerInfo-left__inner'>
            <div className='headerInfo-img'>
                <img src={thumbnail} alt="img" />
            </div>
            <div className='headerInfo-descr'>
                <h4 className="headerInfo-title__name">{name}</h4>
                <p className="headerInfo-text">
                    {description}
                </p>
                <div className="headerInfo-btns">
                    <ButtonLink href={homepage} color="#9F0013" text="HOMEPAGE" />
                    <ButtonLink href={wiki} text="WIKI" />
                </div>
            </div>
        </div>
    )
}

export default HeaderInfo;