import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MarvelService from './services/MarvelService';

const marvelService = new MarvelService()
marvelService.getAllCharacters().then(res => res.data.results.forEach(item => {
    console.log(item.name)
}))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

