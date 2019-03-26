import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './index.css';

const Header = styled.div`
    display: block;
    position: fixed;
    margin: 0 auto;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
    background-color: ${props => props.backgroundColor};
    transition: 0.2s;
`;

const Container = styled.div`
    width: 110rem;
    margin: 0 auto;

    @media only screen and (max-width: 75em) {
        width: 90rem;
    }

    @media only screen and (max-width: 56.25em) {
        width: 60rem;
    }

    @media only screen and (max-width: 37.5em) {
        width: 40rem;
    }
    
`;

class ForumHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayHeader: 'block',
            color: 'black',
            backgroundColor: 'transparent'
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollFunction);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFunction);
    }

    scrollFunction = () => {
        if (window.innerHeight >= 900) {
            if (document.body.scrollTop < 800 || document.documentElement.scrollTop < 800) {
                this.setState({
                    color: 'black',
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

        if (window.innerHeight > 715 && window.innerHeight < 900) {
            if (document.body.scrollTop < 800 || document.documentElement.scrollTop < 800) {
                this.setState({
                    color: 'black'
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
                    color: 'black'
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

        if (window.innerHeight < 650) {
            if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
            this.setState({
                color: 'black'
            })
            } 
        }
    }

    render() {
    
        return(
            <div>
                <Header className="header" backgroundColor={this.state.backgroundColor}>
                    <Container>
                        <Grid container alignItems="center" wrap="nowrap" justify="center">
                        <div className="color-change-2x">
                            <AnchorLink href='#things' style={{ textDecoration: 'none' }}>
                            {this.state.displayHeader === 'none' && <span className="pressstartfont">Wijayanto A.P</span>}
                            </AnchorLink>
                            </div>
                        </Grid>
                    </Container>
                </Header>
            </div>
        );
    }
}

export default ForumHeader;