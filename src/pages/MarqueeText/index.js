import React from 'react';
import splat from './img/splat-white.svg';
import './animation.css';
import './index.css';

class MarqueeText extends React.Component {

    render() {
        return(
            <div className="marquee-container">
                <h1 className="marquee-top">
                    L<br />  
                    O<br />
                    A<br />
                    D<br />  
                    I<br />
                    N<br />
                    G<br />
                </h1>
                <h1 className="marquee-right">LOADING</h1>
                <div className="box-container">
                    <div className="box1"/>
                    <div className="box2"/>
                    <div className="box3"/>
                </div>
                <img src={splat} className="splat" />
                <div className="text1-marquee">Colorful</div>
                <div className="text2-marquee">Ideas</div>
            </div>
        );
    }
}

export default MarqueeText;