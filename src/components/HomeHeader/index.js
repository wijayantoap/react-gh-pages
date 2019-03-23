import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = styled.div`
    display: block;
    position: fixed;
    margin: 0 auto;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background-color: ${props => props.displayHeader && 'red'};
    -webkit-box-shadow: ${props => props.boxShadow ? props.boxShadow : 'none'};
    -moz-box-shadow: ${props => props.boxShadow ? props.boxShadow : 'none'};
    box-shadow: ${props => props.boxShadow ? props.boxShadow : 'none'};
    transition: 0.2s;
    border-bottom: 1px solid #e2e2e2;
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
                    color: 'black'
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
                    color: 'white'
                })
            } 

            if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
                this.setState({
                    color: 'black'
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

            if (document.body.scrollTop > 820 || document.documentElement.scrollTop > 820) {
                this.setState({
                    color: 'white'
                })
            } 

            if (document.body.scrollTop > 1620 || document.documentElement.scrollTop > 1620) {
                this.setState({
                    color: 'black'
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

            if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
                this.setState({
                    color: 'white'
                })
            } 

            // if (document.body.scrollTop > 1340 || document.documentElement.scrollTop > 1340) {
            //     this.setState({
            //         color: 'black'
            //     })
            // }
            if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
                this.setState({
                    color: 'black'
                })
            }
        }
    }

    render() {
    
        return(
            <div>
                <Header className="header" boxShadow={this.state.boxShadow}>
                    <Container>
                        <Grid container alignItems="center" wrap="nowrap" justify="center">
                            <AnchorLink href='#things' style={{ textDecoration: 'none' }}>
                            {this.state.displayHeader === 'none' && <span style={{ fontFamily: 'Pinyon Script, cursive', color: `${this.state.color}`, fontSize: '5rem' }}>Wijayanto A.P</span>}
                            </AnchorLink>
                        </Grid>
                    </Container>
                </Header>
            </div>
        );
    }
}

export default ForumHeader;