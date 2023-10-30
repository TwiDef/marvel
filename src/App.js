import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './components/pages/MainPage';
import ComicsPage from './components/pages/ComicsPage';
import './App.css';

const App = () => {

    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <MainPage />
                    </Route>

                    <Route exact path="/comics">
                        <ComicsPage />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
