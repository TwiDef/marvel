import React from 'react';
import Thumbnail from './../../../resources/img/Thumbnail.png'
import './HeaderInfo.css';

const HeaderInfo = (props) => {
    return (
        <div className='headerInfo'>
            <div className="headerInfo-left">
                <div className='headerInfo-img'>
                    <img src={Thumbnail} alt="img" />
                </div>
                <div className='headerInfo-descr'>
                    <h4 className="headerInfo-title__name">THOR</h4>
                    <p className="headerInfo-text">
                        As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...
                    </p>
                    <div className="headerInfo-btns">
                        <button>btn</button>
                        <button>btn</button>
                    </div>
                </div>
            </div>

            <div className="headerInfo-right">
                <h4 className='headerInfo-title'>
                    Random character for today! <br />
                    Do you want to get to know him better?
                </h4>
                <h4 className='headerInfo-title'>
                    Or choose another one
                </h4>
                <button>btn</button>
            </div>
        </div>
    );
}

export default HeaderInfo;