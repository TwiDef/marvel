import React from 'react';
import './ButtonLink.css';

const ButtonLink = ({ color = "#5C5C5C", text = "none", width = 101, href = "#" }) => {
    return (
        <div className='btn-link' style={{ background: color, width: width + "px" }}>
            <a href={href}>
                {text}
            </a>
        </div>
    );
}

export default ButtonLink;