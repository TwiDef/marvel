import React from 'react';
import { Link } from 'react-router-dom';
import ErrorImg from './../../resources/img/404.jpg'

const Page404 = () => {
    return (
        <>
            <div style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginTop': '50px' }}>
                <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '30px' }}>
                    <h3 style={{ 'fontSize': '60px' }}>404 page not found</h3>
                    <Link style={{ 'fontSize': '40px', 'color': '#9F0013', 'fontWeight': 'bold' }} to="/">Back to main page</Link>
                </div>
                <div>
                    <img src={ErrorImg} alt="ErrorImg" />
                </div>
            </div>
        </>
    );
}

export default Page404;