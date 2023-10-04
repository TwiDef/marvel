import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CharCard from '../char-card/CharCard';
import MarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Button from '../button/Button';
import './CharCards.css';

class CharCards extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        chars: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,
        charEnded: false
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
        let ended = false
        if (newChars.length < 9) {
            ended = true
        }

        this.setState(({ offset, chars }) => (
            {
                chars: [...chars, ...newChars],
                loading: false,
                newItemLoading: false,
                offset: offset + 9,
                charEnded: ended
            }
        ))
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    refItems = []

    onFocus = (ref) => {
        this.refItems.push(ref.current)
        this.refItems.forEach(item => {
            item.classList.remove('char-card--focus')
        })
        ref.current.classList.add('char-card--focus')
        ref.current.focus()
    }

    render() {
        const { chars, loading, error, offset, newItemLoading, charEnded } = this.state
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
                            onFocus={this.onFocus}
                            onCharSelected={this.props.onCharSelected}
                            img={char.thumbnail}
                            name={char.name} />)}
                </ul>
                <div
                    className='load-btn'
                    style={{ display: charEnded ? 'none' : 'block' }}
                >
                    <Button
                        width={170}
                        color="#9F0013"
                        text="LOAD MORE"
                        disabled={newItemLoading}
                        onClick={() => this.onRequest(offset)}
                    />
                </div>
            </>
        );
    }
}

CharCards.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}


export default CharCards;

