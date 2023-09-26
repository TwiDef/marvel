import React, { Component } from 'react';
import './CharCards.css';
import CharCard from '../char-card/CharCard';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import ButtonLink from '../buttonLink/ButtonLink';

class CharCards extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        chars: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService()

    componentDidMount = () => {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharsLoaded)
            .catch(this.onError)
    }

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
            <>
                <ul className='char-cards'>
                    {chars.map((char) =>
                        <CharCard
                            key={char.id}
                            id={char.id}
                            onCharSelected={this.props.onCharSelected}
                            img={char.thumbnail}
                            name={char.name} />)}
                </ul>
                <div className='load-btn'>
                    <ButtonLink width={170} color="#9F0013" text="LOAD MORE" />
                </div>
            </>
        );
    }

}

export default CharCards;

