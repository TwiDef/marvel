import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useMarvelService from '../../../services/MarvelService';
import Banner from '../../banner/Banner';
import Spinner from '../../spinner/Spinner';

import './SingleCharPage.css';


const SingleCharPage = () => {
    const { getCharacter } = useMarvelService()
    const [char, setChar] = useState(null)

    const { id } = useParams()

    const onCharLoaded = (char) => {
        setChar(char)
    }

    useEffect(() => {
        getCharacter(id)
            .then(onCharLoaded)
    }, [])

    if (!char) return <div className="spinner"><Spinner /></div>

    return (
        <>
            <Banner />
            <div className='single-char-wrapper'>
                <div className='single-char-img'>
                    <img src={char.thumbnail} alt="" />
                </div>
                <div className='single-char-about'>
                    <h6>{char.name}</h6>
                    <p>{char.description}</p>
                </div>
            </div>
        </>
    );
};

export default SingleCharPage;