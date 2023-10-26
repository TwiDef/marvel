import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import CharCards from './components/char-cards/CharCards';
import CharAbout from './components/char-about/CharAbout';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import HeaderInfo from './components/header/header-info/HeaderInfo';
import Comics from './components/comics/Comics';
import Banner from './components/banner/Banner';

const App = () => {

    const [selectedChar, setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id)
    }

    return (
        <div className="App">
            <Header />
            <HeaderInfo />
            <section className='main'>
                <CharCards onCharSelected={onCharSelected} />
                <ErrorBoundary>
                    <CharAbout charId={selectedChar} />
                </ErrorBoundary>
            </section>

            {/*  <Banner />
            <Comics /> */}

        </div>
    );
}

export default App;
