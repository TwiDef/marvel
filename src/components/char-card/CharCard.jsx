import React, { Component } from 'react';
import './CharCard.css';

class CharCard extends Component {
    constructor(props) {
        super(props);
        this.charRef = React.createRef()
    }

    render() {
        return (
            <li
                className='char-card'
                ref={this.charRef}
                onClick={() => {
                    this.props.onFocus(this.charRef)
                    this.props.onCharSelected(this.props.id)
                }}
            >
                <img className='char-card__top' src={this.props.img} />
                <div className='char-card__bottom'>
                    <span className='char-card__name'>{this.props.name}</span>
                </div>
            </li>
        );
    }
}

export default CharCard;