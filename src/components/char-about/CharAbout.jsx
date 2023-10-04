import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) {
            this.updateChar()
        }
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
                <CharAboutInfo
                    name={char.name}
                    description={char.description}
                    thumbnail={char.thumbnail}
                    homepage={char.homepage}
                    wiki={char.wiki}
                />
                <CharAboutList
                    comics={char.comics} />
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

CharAbout.propTypes = {
    charId: PropTypes.number
}

export default CharAbout;