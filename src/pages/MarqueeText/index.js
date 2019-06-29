import React from 'react';
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
            </div>
        );
    }
}

export default MarqueeText;