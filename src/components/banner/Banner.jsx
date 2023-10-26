import React from 'react';
import './Banner.css';
import AvengersImg from '../../resources/img/Avengers.png';
import AvengersLogo from '../../resources/img/Avengers-logo.png';

const Banner = (props) => {
    return (
        <div className="banner">
            <img className='banner-img' src={AvengersImg} alt="" />
            <div className='banner-text'>
                <p>New comics every week!</p>
                <p>Stay tuned!</p>
            </div>
            <img className='banner-img' src={AvengersLogo} alt="" />
        </div>
    );
}

export default Banner;