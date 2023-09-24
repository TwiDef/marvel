import React, { Component } from 'react';
import ButtonLink from '../../buttonLink/ButtonLink';
import Mjolhir from './../../../resources/img/mjolnir.png';
import Shield from './../../../resources/img/shield.png';
import MarvelService from './../../../services/MarvelService';
import Spinner from '../../spinner/Spinner';

import './HeaderInfo.css';

class HeaderInfo extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        char: {},
        loading: true
    }

    componentDidMount() {
        this.updateChar()
    }

    marvelService = new MarvelService()

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
    }

    render() {
        const { char, loading } = this.state

        return (
            <div className='headerInfo'>
                {loading ? <Spinner /> : <View char={char} />}
                <div className="headerInfo-right">
                    <h4 className='headerInfo-title'>
                        Random character for today! <br />
                        Do you want to get to know him better?
                    </h4>
                    <h4 className='headerInfo-title'>
                        Or choose another one
                    </h4>
                    <ButtonLink color="#9F0013" text="TRY IT" />

                </div>

                <img className='header-bgimg__first' src={Mjolhir} alt="" />
                <img className='header-bgimg__second' src={Shield} alt="" />
            </div>
        );
    }
}

const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki } = char
    return (
        <div className="headerInfo-left">
            <div className='headerInfo-img'>
                <img src={thumbnail} alt="img" />
            </div>
            <div className='headerInfo-descr'>
                <h4 className="headerInfo-title__name">{name}</h4>
                <p className="headerInfo-text">
                    {description}
                </p>
                <div className="headerInfo-btns">
                    <ButtonLink href={homepage} color="#9F0013" text="HOMEPAGE" />
                    <ButtonLink href={wiki} text="WIKI" />
                </div>
            </div>
        </div>
    )
}

export default HeaderInfo;