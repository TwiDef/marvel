import React from 'react';
import './CharAboutInfo.css';
import Button from '../../button/Button';

const CharAboutInfo = (props) => {
    return (
        <div className='char-about-info'>

            <div className='char-about__notion'>
                <div className='char-about__img'>
                    <img src="https://wwwflickeringmythc3c8f7.zapwp.com/q:intelligent/r:0/wp:1/w:1/u:https://cdn.flickeringmyth.com/wp-content/uploads/2023/07/dfaa44051c35f35560b9884b2cc1f2931ed6-1.jpg" alt="" />
                </div>
                <div className="char-about__inter">
                    <h4>LOKI</h4>
                    <div className="char-about__btns">
                        <Button color="#9F0013" text="HOMEPAGE" />
                        <Button text="WIKI" />
                    </div>
                </div>
            </div>
            <p className="char-about__descr">
                In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
            </p>
        </div>
    );
}

export default CharAboutInfo;