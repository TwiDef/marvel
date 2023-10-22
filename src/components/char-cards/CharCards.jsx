import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import CharCard from '../char-card/CharCard';
import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Button from '../button/Button';
import './CharCards.css';

const CharCards = (props) => {

    const [chars, setChars] = useState([])
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(false)
    let [newItemLoading, setNewItemLoading] = useState(false)
    let [offset, setOffset] = useState(210)
    let [charEnded, setCharEnded] = useState(false)

    const marvelService = useMarvelService()

    useEffect(() => {
        onRequest()
    }, [])

    const onRequest = (offset) => {
        onCharListLoading()
        marvelService
            .getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }

    const onCharListLoading = () => {
        setNewItemLoading(true)
    }

    const onCharListLoaded = (newChars) => {
        let ended = false
        if (newChars.length < 9) {
            ended = true
        }

        setChars(chars => [...chars, ...newChars])
        setLoading(loading => false)
        setNewItemLoading(newItemLoading => false)
        setOffset(offset => offset + 9)
        setCharEnded(charEnded => ended)
    }

    const onError = () => {
        setLoading(loading => false)
        setError(true)
    }

    const refItems = useRef([])

    const onFocus = (ref) => {
        refItems.current.push(ref.current)
        refItems.current.forEach(item => {
            item.classList.remove('char-card--focus')
        })
        ref.current.classList.add('char-card--focus')
        ref.current.focus()
    }

    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null

    if (loading) return <div className='char-cards-spinner'>{spinner}</div>
    if (error) return errorMessage
    return (
        <>
            <ul className='char-cards'>
                {chars.map((char) =>
                    <CharCard
                        key={char.id}
                        id={char.id}
                        onFocus={onFocus}
                        onCharSelected={props.onCharSelected}
                        img={char.thumbnail}
                        name={char.name} />)}
            </ul>
            <div
                className='load-btn'
                style={{ display: charEnded ? 'none' : 'block' }}
            >
                <Button
                    width={170}
                    color="#9F0013"
                    text="LOAD MORE"
                    disabled={newItemLoading}
                    onClick={() => onRequest(offset)}
                />
            </div>
        </>
    );
}

CharCards.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharCards;

