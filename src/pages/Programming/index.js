import React from 'react';
import './index.css'
import './animation.css'

class Programming extends React.Component {
    // componentWillMount() {
    //     document.body.classList.add('js-loading');

    //     window.addEventListener("load", showPage);

    //     function showPage() {
    //     document.body.classList.remove('js-loading');
    //     }

    //     var img = document.querySelector("div");
    //     document.body.classList.add('js-loading');
    //     img.addEventListener("load", removeLoadingClass);
    //     function removeLoadingClass() {
    //     document.body.classList.remove('js-loading');
    //     }
    // }
    render() {
        return(
            <div className="mainprogramming poppinsfont">
                <div className="contentprogramming">
                    <div>
                        <h1 className="h1poppins text-focus-in">Wijayanto Abdurrahman Prawirodirjo</h1>
                        <h2 className="h2poppins tracking-in-expand">Jakarta, Indonesia</h2>
                        <h2 className="h2poppins tracking-in-expand">Currently working as a Front-End Developer</h2>
                    </div>
                    <div className="contentactionprogramming scale-in-hor-right">
                        <a href="#" className="actionpoppins">Portfolio</a>
                        <a href="/aboutme" className="actionpoppins">About</a>
                        <a href="/blogbutdontgonow" className="actionpoppins catprogramming">Blog</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Programming;