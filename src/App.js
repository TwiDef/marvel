import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import CharCards from './components/char-cards/CharCards';
import CharAbout from './components/char-about/CharAbout';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import HeaderInfo from './components/header/header-info/HeaderInfo';
import Comics from './components/comics/Comics';
import Banner from './components/banner/Banner';
import './App.css';

const App = () => {

    const [selectedChar, setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id)
    }

    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>

                    <Route exact path="/">
                        <HeaderInfo />
                        <section className='main'>
                            <CharCards onCharSelected={onCharSelected} />
                            <ErrorBoundary>
                                <CharAbout charId={selectedChar} />
                            </ErrorBoundary>
                        </section>
                    </Route>

                    <Route exact path="/comics">
                        <Banner />
                        <Comics />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
