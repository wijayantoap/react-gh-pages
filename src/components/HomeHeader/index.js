import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

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
            open: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollFunction);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFunction);
    }

    scrollFunction = () => {
        if (document.body.scrollTop > 310 || document.documentElement.scrollTop > 310) {
            this.setState({
                displayHeader: 'none'
            })
        } else {
            this.setState({
                displayHeader: 'block'
            })
        }
    }

    render() {
    
        return(
            <div>
                <Header className="header" boxShadow={this.state.boxShadow}>
                    <Container>
                        <Grid container alignItems="center" wrap="nowrap" justify="center">                    
                            <Grid item>
                                <Link to="/" style={{ textDecoration: 'none', color: 'white', display: `${this.state.displayHeader}` }}><span className="signature" style={{ fontSize: '4.7rem' }}>wijayantoap</span></Link>
                            </Grid>
                            {this.state.displayHeader === 'none' && <h1 style={{ fontFamily: 'Germania One, cursive', color: 'white', fontSize: '5rem', margin: 0 }}>Wijayanto A.P</h1>}
                        </Grid>
                    </Container>
                </Header>
            </div>
        );
    }
}

export default ForumHeader;