import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <div className='header'>
            <div className="header-top">
                <div className='header-text'>
                    <Link to='/'>
                        <span className='header-text__red'>Marvel</span> <span>information portal</span>
                    </Link>
                </div>
                <div className='header-text'>
                    <NavLink
                        end
                        style={({ isActive }) => ({ color: isActive ? '#9F0013' : null })}
                        to='/'>
                        Characters
                    </NavLink>
                    <span> / </span>
                    <NavLink
                        end
                        style={({ isActive }) => ({ color: isActive ? '#9F0013' : null })}
                        to='/comics'>
                        Comics
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Header;