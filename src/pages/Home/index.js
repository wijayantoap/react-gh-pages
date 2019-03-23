import React from 'react';
import { Link } from "react-router-dom";

import { Header, Header__logo_box, Header__logo, Header__text_box } from '../../layout/Header';
import { HeadingPrimary, HeadingPrimary__main, HeadingPrimary__sub } from '../../base/Typography';
import HomeHeader from '../../components/HomeHeader';

import logo from '../../img/logo-white.png'
import { Button } from '../../components/Button';

import wallpaper1 from '../../img/whiteabstract.jpg';
import wallpaper2 from '../../img/nightwindow.jpg';
import wallpaper3 from '../../img/lonetree.jpg';
import wallpaper4 from '../../img/rockstatues.jpg';
import wallpaper5 from '../../img/junglefantasy.jpg';

import ProgressBar from "react-scroll-progress-bar";
import LazyHero from 'react-lazy-hero';

import '../../stars.css'

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
            if (document.body.scrollTop < 800 || document.documentElement.scrollTop < 800) {
                this.setState({
                    scrollColor: 'black'
                })
            } 

            if (document.body.scrollTop > 422 || document.documentElement.scrollTop > 422) {
                this.setState({
                    displayHeader: 'none'
                })
            } else {
                this.setState({
                    displayHeader: 'block'
                })
            }

            if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
                this.setState({
                    scrollColor: 'white'
                })
            } 
            
            if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
                this.setState({
                    scrollColor: 'black'
                })
            }  

            if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
                this.setState({
                    scrollColor: 'blue'
                })
            }  
            
            if (document.body.scrollTop > 3600 || document.documentElement.scrollTop > 3600) {
                this.setState({
                    scrollColor: 'black'
                })
            }  
        } 
        if (window.innerHeight > 715 && window.innerHeight < 900) {
            if (document.body.scrollTop < 900 || document.documentElement.scrollTop < 900) {
                this.setState({
                    scrollColor: 'black'
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

            if (document.body.scrollTop > 820 || document.documentElement.scrollTop > 820) {
                this.setState({
                    scrollColor: 'white'
                })
            } 
            
            if (document.body.scrollTop > 1620 || document.documentElement.scrollTop > 1620) {
                this.setState({
                    scrollColor: 'black'
                })
            }  

            if (document.body.scrollTop > 2470 || document.documentElement.scrollTop > 2470) {
                this.setState({
                    scrollColor: 'blue'
                })
            }  
            
            if (document.body.scrollTop > 3270 || document.documentElement.scrollTop > 3270) {
                this.setState({
                    scrollColor: 'black'
                })
            }  
        }
        if (window.innerHeight < 715) {
            if (document.body.scrollTop < 700 || document.documentElement.scrollTop < 700) {
                this.setState({
                    scrollColor: 'black'
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

            if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
                this.setState({
                    scrollColor: 'white'
                })
            } 
            
            // if (document.body.scrollTop > 1340 || document.documentElement.scrollTop > 1340) {
            //     this.setState({
            //         scrollColor: 'black'
            //     })
            // }  

            if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
                this.setState({
                    scrollColor: 'blue'
                })
            }  
            
            // if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
            //     this.setState({
            //         scrollColor: 'black'
            //     })
            // }  

            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                this.setState({
                    scrollColor: 'black'
                })
            }
        }
    }

    render() {
        return(
            <div>
                <HomeHeader />
                <ProgressBar height="6px" bgcolor={this.state.scrollColor} style={{ top: 50 }}/>
                <div id='things'>
                <LazyHero imageSrc={wallpaper1} opacity="0" minHeight="100vh" parallaxOffset="100" transitionDuration="1000">
                    <span style={{ fontFamily: 'Pinyon Script, cursive', color: 'black', fontSize: '5rem', display: `${this.state.displayHeader}` }}>Wijayanto A.P</span>
                </LazyHero>
                </div>
                <div>
                <LazyHero imageSrc={wallpaper2} opacity=".2" minHeight="100vh" isFixed="true" transitionDuration="2000" transitionTimingFunction="ease-in-out">
                </LazyHero>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                </div>
                <div>
                <LazyHero imageSrc={wallpaper3} opacity="0" minHeight="100vh">
                </LazyHero>
                </div>
                {/* <div>
                <LazyHero imageSrc={wallpaper4} opacity="0" minHeight="100vh">
                </LazyHero>
                </div>
                <div>
                <LazyHero imageSrc={wallpaper5} opacity="0" minHeight="100vh">
                </LazyHero>
                </div> */}
                </div>
        );
    }
}

export default Home;