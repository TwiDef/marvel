import React, { Component } from 'react';
import './CharCards.css';
import CharCard from '../char-card/CharCard';
import Button from '../button/Button';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

class CharCards extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        chars: [],
        loading: true,
        error: false
    }

    componentDidMount = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharsLoaded)
            .catch(this.onError)
    }

    marvelService = new MarvelService()

    onCharsLoaded = (chars) => {
        this.setState({
            chars,
            loading: false
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {
        const { chars, loading, error } = this.state
        const errorMessage = error ? <ErrorMessage /> : null
        const spinner = loading ? <Spinner /> : null

        if (loading) return <div className='char-cards-spinner'>{spinner}</div>
        if (error) return errorMessage
        return (
            <ul className='char-cards'>
                {chars.map((char, i) =>
                    <CharCard
                        key={i}
                        img={char.thumbnail}
                        name={char.name} />)}
            </ul>
        );
    }

}

export default CharCards;

