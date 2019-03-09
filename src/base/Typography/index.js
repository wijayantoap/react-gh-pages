import styled from 'styled-components';
import { moveInLeft, moveInRight } from '../Animation';

export const HeadingPrimary = styled.h1`
    color: #fff;

    backface-visibility: hidden;
    margin-bottom: 6rem;
`;

export const HeadingPrimary__main = styled.span`
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 1.5rem;
    
    animation-name: ${moveInLeft};
    animation-duration: 1s;
    animation-timing-function: ease-out;
    
    @media only screen and (max-width: 56.25em) {
        letter-spacing: 1rem;
        font-size: 5rem
    }

    @media only screen and (max-width: 37.5em) {
        letter-spacing: 1rem;
        font-size: 3rem
    }
`;

export const HeadingPrimary__sub = styled.span`
    display: block;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 1rem;
    animation: ${moveInRight} 1s ease-out;

    @media only screen and (max-width: 56.25em) {
        letter-spacing: .5rem;
        font-size: 2rem;
    }

    @media only screen and (max-width: 37.5em) {
        letter-spacing: .5rem;
        font-size: 1rem;
    }
`;

export const HeadingSecondary = styled.h2`
    font-size: 3.5rem;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, #8e574d, #443937);
    -webkit-background-clip: text;
    color: transparent;
    letter-spacing: .2rem;
    transition: all .2s;

    @media only screen and (max-width: 37.5em) {
        font-size: 3rem;
    }

    @media only screen and (max-width: 56.25em) {
        font-size: 2.5rem;
    }

    :hover {
        transform: skewY(2deg) skewX(15deg) scale(1.1);
        text-shadow: .5rem 1rem 2rem rgba(0, 0, 0, .2);
    }
`;