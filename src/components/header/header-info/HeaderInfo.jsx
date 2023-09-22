import React from 'react';
import Button from '../../button/Button';
import Thumbnail from './../../../resources/img/Thumbnail.png';
import Mjolhir from './../../../resources/img/mjolnir.png';
import Shield from './../../../resources/img/shield.png';

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
                        <Button color="#9F0013" text="HOMEPAGE" />
                        <Button text="WIKI" />
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
                <Button color="#9F0013" text="TRY IT" />

            </div>

            <img className='header-bgimg__first' src={Mjolhir} alt="" />
            <img className='header-bgimg__second' src={Shield} alt="" />
        </div>
    );
}

export default HeaderInfo;