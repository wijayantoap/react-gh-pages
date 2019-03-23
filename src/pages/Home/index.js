import React from 'react';
import { Link } from "react-router-dom";

import { Header, Header__logo_box, Header__logo, Header__text_box } from '../../layout/Header';
import { HeadingPrimary, HeadingPrimary__main, HeadingPrimary__sub } from '../../base/Typography';
import HomeHeader from '../../components/HomeHeader';

import logo from '../../img/logo-white.png'
import { Button } from '../../components/Button';

import wallpaper1 from '../../img/junglefantasy.jpg';
import wallpaper2 from '../../img/castlewaterfall.jpg';
import wallpaper3 from '../../img/magiciandragon.jpg';
import wallpaper4 from '../../img/rockstatues.jpg';
import wallpaper5 from '../../img/shipsealight.jpg';

import ProgressBar from "react-scroll-progress-bar";
import LazyHero from 'react-lazy-hero';

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
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFunction);
    }

    scrollFunction = () => {
        if (document.body.scrollTop < 700 || document.documentElement.scrollTop < 700) {
            this.setState({
                scrollColor: 'green'
            })
        } 

        if (document.body.scrollTop > 310 || document.documentElement.scrollTop > 310) {
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
                scrollColor: 'red'
            })
        } 
          
        if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
            this.setState({
                scrollColor: 'yellow'
            })
        }  

        if (document.body.scrollTop > 2100 || document.documentElement.scrollTop > 2100) {
            this.setState({
                scrollColor: 'blue'
            })
        }  
        
        if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
            this.setState({
                scrollColor: 'black'
            })
        }  
    }

    render() {
        return(
            <div>
                <HomeHeader />
                <ProgressBar height="6px" bgcolor={this.state.scrollColor} style={{ top: 50 }}/>
                <div>
                <LazyHero imageSrc={wallpaper1} opacity="0" minHeight="100vh" parallaxOffset="100">
                    <span style={{ fontFamily: 'Germania One, cursive', color: 'white', fontSize: '5rem', display: `${this.state.displayHeader}` }}>Wijayanto A.P</span>
                </LazyHero>
                </div>
                <div>
                <LazyHero imageSrc={wallpaper2} opacity="0" minHeight="100vh" transitionTimingFunction="ease-in-out">
                    <h1 style={{ fontFamily: 'Germania One, cursive', color: 'white', fontSize: '5rem' }}>Wijayanto A.P</h1>
                </LazyHero>
                </div>
                <div>
                <LazyHero imageSrc={wallpaper3} opacity="0" minHeight="100vh">
                    <h1 style={{ fontFamily: 'Germania One, cursive', color: 'white', fontSize: '5rem' }}>Wijayanto A.P</h1>
                </LazyHero>
                </div>
                <div>
                <LazyHero imageSrc={wallpaper4} opacity="0" minHeight="100vh">
                    <h1 style={{ fontFamily: 'Germania One, cursive', color: 'white', fontSize: '5rem' }}>Wijayanto A.P</h1>
                </LazyHero>
                </div>
                <div>
                <LazyHero imageSrc={wallpaper5} opacity="0" minHeight="100vh">
                    <h1 style={{ fontFamily: 'Germania One, cursive', color: 'white', fontSize: '5rem' }}>Wijayanto A.P</h1>
                </LazyHero>
                </div>
                {/* <Header>
                    <Header__logo_box>
                        <Header__logo src={logo} />
                    </Header__logo_box>
                    <Header__text_box>
                        <HeadingPrimary>
                            <HeadingPrimary__main>UNDER CONSTRUCTION</HeadingPrimary__main>
                            <HeadingPrimary__sub>
                                Coming soon, <span style={{ color: '#1866e2' }}>&#123;</span>with<span style={{ color: '#ef5da1' }}>Style</span><span style={{ color: '#1866e2' }}>&#125;</span>
                            </HeadingPrimary__sub>
                        </HeadingPrimary>
                        <div><Link to={'/forum'}><Button>Forum</Button></Link></div>
                        <div><Link to={'/blog'}><Button style={{ marginTop: 16 }} color={'white'} background={'#2998ff'}>Blog</Button></Link></div>
                    </Header__text_box>
                </Header> */}
            </div>
        );
    }
}

export default Home;