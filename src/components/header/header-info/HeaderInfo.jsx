import React, { Component } from 'react';
import ButtonLink from '../../buttonLink/ButtonLink';
import Mjolhir from './../../../resources/img/mjolnir.png';
import Shield from './../../../resources/img/shield.png';
import MarvelService from './../../../services/MarvelService';

import './HeaderInfo.css';


class HeaderInfo extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        char: {}
    }

    componentDidMount() {
        this.updateChar()
    }

    marvelService = new MarvelService()

    onCharLoaded = (char) => {
        this.setState({ char })
    }

    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
        console.log(id)
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
    }

    render() {
        const { char: { name, description, thumbnail, homepage, wiki } } = this.state

        return (
            <div className='headerInfo'>
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

export default HeaderInfo;