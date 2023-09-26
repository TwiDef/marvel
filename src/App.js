import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import CharCards from './components/char-cards/CharCards';
import CharAbout from './components/char-about/CharAbout';
import bgImg from './resources/img/bg.png'
import CharAboutSkeleton from './components/char-about/char-about-skeleton/CharAboutSkeleton';

class App extends Component {

    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="App">
                <img className='bgImg' src={bgImg} alt="" />
                <Header />
                <section className='main'>
                    <CharCards onCharSelected={this.onCharSelected} />
                    <CharAbout charId={this.state.selectedChar} />
                </section>
            </div>
        );
    }
}

export default App;
