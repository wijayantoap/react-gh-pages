import React from 'react';
import { Link } from "react-router-dom";

import { Header, Header__logo_box, Header__logo, Header__text_box } from '../../layout/Header';
import { HeadingPrimary, HeadingPrimary__main, HeadingPrimary__sub } from '../../base/Typography';

import logo from '../../img/logo-white.png'
import { Button } from '../../components/Button';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Header>
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
                        <div><Link to={'/login'}><Button>Click here if you are me</Button></Link></div>
                        <div><Link to={'/blog'}><Button style={{ marginTop: 16 }} color={'white'} background={'#2998ff'}>Go to my blog</Button></Link></div>
                    </Header__text_box>
                </Header>
            </div>
        );
    }
}

export default Home;