import React, { Component } from 'react';
import CharAboutInfo from './char-about-info/CharAboutInfo';
import CharAboutList from './char-about-list/CharAboutList';
import MarvelService from '../../services/MarvelService';
import './CharAbout.css';

class CharAbout extends Component {

    state = {
        chars: [],
        loading: false,
        error: false
    }

    marvelService = new MarvelService()

    updateChar = () => {
        const { charId } = this.props
        if (!charId) {
            return
        }

        this.onCharLoading()
        this.marvelService
            .getCharacter(charId)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {
        return (
            <div className='char-about-wrapper'>
                <div className='char-about'>
                    <CharAboutInfo />
                    <CharAboutList />
                </div>
            </div>
        );
    }
}


export default CharAbout;