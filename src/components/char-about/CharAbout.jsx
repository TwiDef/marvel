import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CharAboutInfo from './char-about-info/CharAboutInfo';
import CharAboutList from './char-about-list/CharAboutList';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './CharAbout.css';
import CharAboutSkeleton from './char-about-skeleton/CharAboutSkeleton';

const CharAbout = (props) => {

    const [char, setChar] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const marvelService = new MarvelService()

    useEffect(() => {
        updateChar()
    }, [props.charId])

    const updateChar = () => {
        const { charId } = props
        if (!charId) {
            return
        }

        onCharLoading()
        marvelService
            .getCharacter(charId)
            .then(onCharLoaded)
            .catch(onError)
    }

    const onCharLoaded = (char) => {
        setChar(char)
        setLoading(false)
    }

    const onCharLoading = () => {
        setLoading(true)
    }

    const onError = () => {
        setLoading(false)
        setError(true)
    }


    const skeleton = char || loading || error ? null : <CharAboutSkeleton />
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error || !char)
        ? <div className='char-about'>
            <CharAboutInfo
                name={char.name}
                description={char.description}
                thumbnail={char.thumbnail}
                homepage={char.homepage}
                wiki={char.wiki}
            />
            <CharAboutList
                comics={char.comics} />
        </div>
        : null

    if (loading) return <div className='char-about-spinner'>{spinner}</div>
    if (error) return errorMessage

    return (
        <div className='char-about-wrapper'>
            {skeleton}
            {content}
        </div>
    );
}


CharAbout.propTypes = {
    charId: PropTypes.number
}

export default CharAbout;