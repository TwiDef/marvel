import React, { Component } from 'react';
import './CharAboutSkeleton.css';

class CharAboutSkeleton extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='skeleton-wrapper'>
                <div className='skeleton'>
                    <h4 className='sceleton-title'>Please select a character to see information</h4>
                    <div className="skeleton-items">
                        <div className="skeleton-item-round blink"></div>
                        <div className="skeleton-item-rectangle__small blink"></div>
                    </div>
                    <div className='skeleton-rectangles'>
                        <div className="skeleton-rectangle blink"></div>
                        <div className="skeleton-rectangle blink"></div>
                        <div className="skeleton-rectangle blink"></div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CharAboutSkeleton;