import React from 'react';
import './Button.css';

const Button = ({ color = "#5C5C5C", text = "none", width = 101 }) => {
    return (
        <>
            <button style={{ background: color, width: width + "px" }}>
                {text}
            </button >
        </>
    );
}

export default Button;