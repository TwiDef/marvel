import React, { Component } from 'react';
import CharAboutInfo from './char-about-info/CharAboutInfo';
import CharAboutList from './char-about-list/CharAboutList';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import './CharAbout.css';
import CharAboutSkeleton from './char-about-skeleton/CharAboutSkeleton';

class CharAbout extends Component {

    state = {
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService()

    componentDidMount() {
        this.updateChar()
    }

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
        const { char, loading, error } = this.state
        const skeleton = char || loading || error ? null : <CharAboutSkeleton />
        const errorMessage = error ? <ErrorMessage /> : null
        const spinner = loading ? <Spinner /> : null
        const content = !(loading || error || !char)
            ? <div className='char-about'>
                <CharAboutInfo />
                <CharAboutList />
            </div>
            : null

        if (loading) return <div className='char-about-spinner'>{spinner}</div>
        if (error) return errorMessage

        return (
            <div className='char-about-wrapper'>
                {skeleton}
                {content}
            </div>
        );
    }
}


export default CharAbout;