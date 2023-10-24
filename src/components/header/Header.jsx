import React from 'react';
import './Header.css';

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
        </div>
    );
}

export default Header;