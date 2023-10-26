import React, { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import './Comics.css';

const Comics = (props) => {

    const [comicsList, setComicsList] = useState([])
    const [newItemLoading, setNewItemLoading] = useState(false)
    const [offset, setOffset] = useState(0)
    const [comicsEnded, setComicsEnded] = useState(false)

    useEffect(() => {
        onRequest()
    }, [])

    const { loading, error, getAllComics } = useMarvelService()

    const onRequest = (offset, initial) => {
        initial ? setNewItemLoading(false) : setNewItemLoading(true)
        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComicsList) => {
        let ended = false
        if (newComicsList.length < 8) {
            ended = true
        }
        setComicsList(comics => [...comicsList, ...newComicsList])
        setNewItemLoading(newItemLoading => false)
        setOffset(offset + 8)
        setComicsEnded(ended)
    }

    const renderItem = (arr) => {
        const items = arr.map((item, i) => {
            return (
                <li className="comics-item"
                    key={i}>
                    <img className='comics-item__cover'
                        src={item.cover}
                        alt={item.title} />
                    <h6 className='comics-item__title'>{item.title}</h6>
                    <p className='comics-item__price'>{item.price}</p>
                </li>
            )
        })
        return items
    }

    const items = renderItem(comicsList)
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null

    if (loading) return <div className='comics-spinner'>{spinner}</div>
    if (error) return <ErrorMessage />

    return (
        <>
            {errorMessage}
            {spinner}
            <ul className="comics-list">
                {items}
            </ul>
        </>
    );
}



export default Comics;