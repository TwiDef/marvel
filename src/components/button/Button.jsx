import React from 'react';
import './Button.css';

const Button = ({ color = "#5C5C5C", text = "none" }) => {
    return (
        <>
            <button style={{ background: color }}>
                {text}
            </button >
        </>
    );
}

export default Button;