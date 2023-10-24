import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import CharCards from './components/char-cards/CharCards';
import CharAbout from './components/char-about/CharAbout';
import bgImg from './resources/img/bg.png'
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import HeaderInfo from './components/header/header-info/HeaderInfo';

const App = () => {

    const [selectedChar, setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id)
    }

    return (
        <div className="App">
            <img className='bgImg' src={bgImg} alt="" />
            <Header />
            <HeaderInfo />
            <section className='main'>
                <CharCards onCharSelected={onCharSelected} />
                <ErrorBoundary>
                    <CharAbout charId={selectedChar} />
                </ErrorBoundary>
            </section>
        </div>
    );
}

export default App;
