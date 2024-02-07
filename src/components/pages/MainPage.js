import React, { useState } from 'react';
import Hemlet from 'react-helmet';

import CharCards from './../char-cards/CharCards';
import CharAbout from './../char-about/CharAbout';
import HeaderInfo from './../header/header-info/HeaderInfo';
import ErrorBoundary from './../errorBoundary/ErrorBoundary';

const MainPage = (props) => {
    const [selectedChar, setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id)
    }

    return (
        <>
            <Hemlet>
                <meta
                    name="description"
                    content="Marvel information portal" />
                <title>Marvel information portal</title>
            </Hemlet>

            <ErrorBoundary>
                <HeaderInfo />
            </ErrorBoundary>
            <section className='main'>
                <CharCards onCharSelected={onCharSelected} />
                <ErrorBoundary>
                    <CharAbout charId={selectedChar} />
                </ErrorBoundary>
            </section>
        </>
    )
}

export default MainPage