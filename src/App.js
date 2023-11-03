import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import MainPage from './components/pages/MainPage';
import ComicsPage from './components/pages/ComicsPage';
import './App.css';
import Page404 from './components/pages/404';
import SingleComic from './components/pages/singleComic/SingleComic';

const App = () => {

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/comics" element={<ComicsPage />} />
                    <Route path="*" element={<Page404 />} />
                    <Route path="/comic" element={<SingleComic />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App; 
