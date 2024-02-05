import React from 'react';
import Banner from '../../banner/Banner';

import './SingleCharPage.css';

const SingleCharPage = () => {
    return (
        <>
            <Banner />
            <div className='single-char-wrapper'>
                <div className='single-char-img'>
                    <img src="https://static.insales-cdn.com/assets/1/5244/1840252/1652522081/404.jpg" alt="" />
                </div>
                <div className='single-char-about'>
                    <h6>Name</h6>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta accusantium, eligendi accusamus delectus vero aliquam suscipit mollitia esse iure adipisci praesentium inventore vel amet nostrum quas sapiente. Nam, placeat fugit.</p>
                </div>
            </div>
        </>
    );
};

export default SingleCharPage;