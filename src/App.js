import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './components/pages/MainPage';
import ComicsPage from './components/pages/ComicsPage';
import './App.css';

const App = () => {

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/comics" element={<ComicsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
