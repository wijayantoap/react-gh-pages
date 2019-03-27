import React from 'react';
import './index.css'

class Programming extends React.Component {
    render() {
        return(
            <div className="mainprogramming poppinsfont">
                <div className="contentprogramming">
                    <div>
                        <h1 className="h1poppins">Wijayanto Abdurrahman Prawirodirjo</h1>
                        <h2 className="h2poppins">Jakarta, Indonesia</h2>
                        <h2 className="h2poppins">Currently working as a Front-End Developer</h2>
                    </div>
                    <div className="contentactionprogramming">
                        <a href="#" className="actionpoppins">Portfolio</a>
                        <a href="#" className="actionpoppins">About</a>
                        <a href="/blogbutdontgonow" className="actionpoppins catprogramming">Blog</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Programming;