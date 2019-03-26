import React from 'react';
import HomeHeader from '../../components/HomeHeader';

import wallpaper1 from '../../img/nightcityvector.jpg';
import wallpaper2 from '../../img/dubaivector.jpg';
import wallpaper3 from '../../img/moderncity.jpg';
import wallpaper4 from '../../img/nightcity.jpg';
import facebook from '../../img/facebookpixel.jpg';
import twitter from '../../img/twitterpixel.png';
import instagram from '../../img/instagrampixel.png';

import ProgressBar from "react-scroll-progress-bar";
import LazyHero from 'react-lazy-hero';

import '../../stars.css';
import './index.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayHeader: 'block',
            scrollColor: 'green'
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollFunction);
        console.log(window.innerHeight)
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFunction);
    }

    scrollFunction = () => {
        if (window.innerHeight >= 900) {

            if (document.body.scrollTop > 422 || document.documentElement.scrollTop > 422) {
                this.setState({
                    displayHeader: 'none'
                })
            } else {
                this.setState({
                    displayHeader: 'block',
                    scrollColor: 'black'
                })
            }
        } 
        
        if (window.innerHeight > 715 && window.innerHeight < 900) {
            if (document.body.scrollTop < 900 || document.documentElement.scrollTop < 900) {
                this.setState({
                    scrollColor: 'rgb(123, 16, 223)'
                })
            } 

            if (document.body.scrollTop > 372 || document.documentElement.scrollTop > 372) {
                this.setState({
                    displayHeader: 'none'
                })
            } else {
                this.setState({
                    displayHeader: 'block'
                })
            }
        }
        if (window.innerHeight < 715) {
            if (document.body.scrollTop < 700 || document.documentElement.scrollTop < 700) {
                this.setState({
                    scrollColor: 'rgb(123, 16, 223)'
                })
            } 

            if (document.body.scrollTop > 322 || document.documentElement.scrollTop > 322) {
                this.setState({
                    displayHeader: 'none'
                })
            } else {
                this.setState({
                    displayHeader: 'block'
                })
            }
        }

        // if (window.innerHeight < 650) {
        //     if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        //     this.setState({
        //         scrollColor: 'red'
        //     })
        //     } 
        // }
    }

    render() {
        return(
            <div>
                <HomeHeader />
                <ProgressBar height="6px" bgcolor={this.state.scrollColor} style={{ top: 50, zIndex: 100 }}/>
                <div id='things' style={{ marginBottom: 5 }}>
                    <LazyHero imageSrc={wallpaper1} opacity="0" minHeight="100vh" parallaxOffset="100" transitionDuration="1000">
                        <span class="pressstartfont" data-aos="fade-in" style={{ fontSize: '5rem', display: `${this.state.displayHeader}` }}>Wijayanto A.P</span>
                        <div class="loader">Loading...</div>
                    </LazyHero>
                </div>
                <div style={{ backgroundImage: `url(${wallpaper4})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '50px 0 50px 0' }} >
                    
                    
                    <div class="item item--primary"
                        data-aos="fade-right"
                        data-aos-anchor="#trigger-twitter"
                        data-aos-anchor-placement="center-center">
                        <a href="https://twitter.com/wijayantoap" target="_blank">
                        <img src={twitter} style={{ width: 150, height: 150 }} />
                    </a>
                    </div>

                    <div class="item item--secondary"
                        data-aos="fade-right"
                        data-aos-anchor="#trigger-fb"
                        data-aos-anchor-placement="center-center">
                        <a href="https://www.facebook.com/wizzone" target="_blank">
                        <img src={facebook} style={{ width: 150, height: 150 }} />
                    </a>
                    </div>
                    <div class="item item--secondary"
                        data-aos="fade-right"
                        data-aos-anchor="#trigger-insta"
                        data-aos-anchor-placement="center-center">
                        <a href="https://www.instagram.com/wijayantoap/" target="_blank">
                        <img src={instagram} style={{ width: 150, height: 150 }} />
                    </a>
                    </div>

                    <div class="pressstartfont" style={{ margin: '0px auto 0 auto', textAlign: 'center',
                    background: '-webkit-linear-gradient(red, #333)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent' }}>Get in touch</div>

                    <div id="trigger-fb" class="pressstartfont" style={{ margin: '500px auto 0 auto', textAlign: 'center',
                    background: '-webkit-linear-gradient(#333, blue)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent' }}>&larr;Send your best memes here</div>

                    <div id="trigger-twitter" class="pressstartfont" style={{ margin: '500px auto 500px auto', textAlign: 'center',
                    background: '-webkit-linear-gradient(#333, lightskyblue)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent' }}>No one using this but whatever&rarr;</div>

                    <div id="trigger-insta" class="pressstartfont" style={{ margin: '500px auto 500px auto', textAlign: 'center',
                    background: '-webkit-linear-gradient(#333, lightcoral)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent' }}>&larr;Might as well putting this</div>

                    <div class="pressstartfont" style={{ margin: '500px auto 300px auto', textAlign: 'center',
                    background: '-webkit-linear-gradient(#333, #0259e5)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent' }}><a href="https://www.linkedin.com/in/wijayantoap/" target="_blank">Click here to visit my linked in</a></div>
                    <div id="stars"></div>
                    <div id="stars2"></div>
                    <div id="stars3"></div>
                </div>
            </div>
        );
    }
}

export default Home;