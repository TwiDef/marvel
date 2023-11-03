import React from 'react';
import './SingleComic.css';
import Banner from '../../banner/Banner';

const SingleComic = (props) => {
    return (
        <div>
            <Banner />
            <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'marginTop': '50px' }}>
                <div className="comic">
                    <img src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781474226349.jpg" alt="comic-cover" className="comic-cover" />
                    <div className="comic-info">
                        <h4 className="comic-title">X-Men: Days of Future Past</h4>
                        <p className="comic-description">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                        <div className="comic-quantity">144 pages</div>
                        <div className="comic-language">Language: en-us</div>
                        <div className="comic-price">9.99$</div>
                    </div>
                </div>
                <a className='comic-backward-btn' href="#">Back to all</a>
            </div>
        </div>
    );
}

export default SingleComic;