import React from 'react';
import './Header.css';
import HeaderInfo from './header-info/HeaderInfo';

const Header = (props) => {
    return (
        <div className='header'>
            <div className="header-top">
                <div className='header-text'>
                    <span className='header-text__red'>Marvel</span> <span>information portal</span></div>
                <div className='header-text'>
                    <a href='#' className='header-text__red'>Characters</a> / <a href='#'>Comics</a>
                </div>
            </div>

            <HeaderInfo />
        </div>
    );
}

export default Header;