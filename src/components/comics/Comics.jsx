import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Button from '../button/Button';
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
                    <Link to={`/comics/${item.id}`}>
                        <img className='comics-item__cover'
                            src={item.cover}
                            alt={item.title} />
                        <h6 className='comics-item__title'>{item.title}</h6>
                        <p className='comics-item__price'>{item.price}</p>
                    </Link>
                </li>
            )
        })
        return items
    }

    const items = renderItem(comicsList)
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null

    return (
        <>
            {errorMessage}
            {spinner}
            <ul className="comics-list">
                {items}
            </ul>
            <div className='comics-loadmore'>
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



export default Comics;