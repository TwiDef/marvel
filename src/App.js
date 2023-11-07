import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner';
import './App.css';

const Page404 = lazy(() => import('./components/pages/404'))
const MainPage = lazy(() => import('./components/pages/MainPage'))
const ComicsPage = lazy(() => import('./components/pages/ComicsPage'))
const SingleComicPage = lazy(() => import('./components/pages/singleComicPage/SingleComicPage'))

const App = () => {

    return (
        <Router>
            <div className="App">
                <Header />
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/comics" element={<ComicsPage />} />
                        <Route path="/comics/:comicId" element={<SingleComicPage />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </div>
        </Router>
    );
}

export default App; 
