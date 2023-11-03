import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useMarvelService from '../../../services/MarvelService';
import Banner from '../../banner/Banner';
import Spinner from '../../spinner/Spinner';
import ErrorMessage from '../../errorMessage/ErrorMessage';
import './SingleComicPage.css';

const SingleComicPage = () => {
    const { comicId } = useParams()
    const [comic, setComic] = useState({})

    const { loading, error, getComic, clearError } = useMarvelService()

    useEffect(() => {
        updateComic()
    }, [comicId])

    const updateComic = () => {
        clearError()
        getComic(comicId)
            .then(onComicLoaded)
    }

    const onComicLoaded = (comic) => {
        setComic(comic)
    }
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error || !comic) ? <View comic={comic} /> : null

    return (
        <>
            <Banner />
            {errorMessage}
            {spinner}
            {content}
        </>
    );
}

const View = ({ comic }) => {
    const { cover, title, description, pageCount, language, price } = comic

    return (
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '50px' }}>
            <div className="comic">
                <img src={cover} alt={title} className="comic-cover" />
                <div className="comic-info">
                    <h4 className="comic-name">{title}</h4>
                    <p className="comic-description">{description}</p>
                    <p className="comic-quantity">{pageCount}</p>
                    <p className="comic-language">Language: {language}</p>
                    <div className="comic-price">{price}</div>
                </div>
            </div>
            <Link
                className='comic-backward-btn'
                to="/comics">
                Back to all
            </Link>
        </div>
    )
}

export default SingleComicPage;