import React, { useState } from 'react';
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
            <HeaderInfo />
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