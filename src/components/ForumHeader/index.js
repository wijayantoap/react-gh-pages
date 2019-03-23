import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Dialog from '../Dialog';
import { Link } from "react-router-dom";

const Header = styled.div`
    display: block;
    position: fixed;
    padding: 0.8rem;
    margin: 0 auto;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 5rem; */
    z-index: 100;
    background-color: white;
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

const Button = styled.div`
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    line-height: 2rem;
    padding: .8rem 1.3rem;
    color: #808080;
    font-size: 1.6rem;

    :hover {
        /* background-color: #f9f9f9; */
    }
`;

const Input = styled.input`
    width: 4rem;
    transition: 0.5s;
    color: #666666;
    border-radius: 5rem;
    padding: .9rem 1rem .9rem 3.2rem;
    border: 1px solid #808080;
    background: url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat .9rem center;

    :focus {
        width: 15rem;
        background-color: white;
        outline: none;
        border: 1px solid #5ea3ed;
        -moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
	    box-shadow: 0 0 5px rgba(109,207,246,.5);
    }
`;

class ForumHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxShadow: 'none',
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
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            this.setState({
                boxShadow: '0 2px 4px -1px rgba(0,0,0,0.25)'
            })
        } else {
            this.setState({
                boxShadow: 'none'
            })
        }
    }

    handleClickOpen = () => {
        this.setState({
          open: true,
        });
      };
    
    handleClose = value => {
        this.setState({ selectedValue: value, open: false });
    };

    render() {
    
        return(
            <div>
                <Header className="header" boxShadow={this.state.boxShadow}>
                    <Container>
                        <Grid container alignItems="center" wrap="nowrap">                    
                            <Grid item>
                                <Link to="/forum" style={{ textDecoration: 'none', color: '#666' }}><span className="signature">wijayantoap</span></Link>
                            </Grid>
                            <Grid item style={{ flex: 1}} />
                            <Grid item>
                                <Input placeholder="Search" style={{ marginRight: '1.5rem' }}/>
                                <Button onClick={this.handleClickOpen}><span>Sign Up / Log In</span>
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Header>
                <Dialog open={this.state.open} onClose={this.handleClose}/>
            </div>
        );
    }
}

export default ForumHeader;