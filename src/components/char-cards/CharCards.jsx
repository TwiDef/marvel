import React, { Component } from 'react';
import './CharCards.css';
import CharCard from '../char-card/CharCard';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Button from '../button/Button';

class CharCards extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        chars: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210
    }

    marvelService = new MarvelService()

    componentDidMount() {
        this.onRequest()
    }

    onRequest = (offset) => {
        this.onCharListLoading()
        this.marvelService
            .getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newChars) => {
        this.setState(({ offset, chars }) => (
            {
                chars: [...chars, ...newChars],
                loading: false,
                newItemLoading: false,
                offset: offset + 9
            }
        ))
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {
        const { chars, loading, error, offset, newItemLoading } = this.state
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
                <div
                    className='load-btn'
                >
                    <Button
                        width={170}
                        color="#9F0013"
                        text="LOAD MORE"
                        onClick={() => this.onRequest(offset)}
                    />
                </div>
            </>
        );
    }

}

export default CharCards;

