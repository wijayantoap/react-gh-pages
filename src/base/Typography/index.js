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
    letter-spacing: 3.5rem;

    animation-name: ${moveInLeft};
    animation-duration: 1s;
    animation-timing-function: ease-out;

    /* @include respond(phone {

    }) */
    @media only screen and (max-width: 37.5em) {
        letter-spacing: 1rem;
    }
`;

export const HeadingPrimary__sub = styled.span`
    display: block;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: 1rem;
    animation: ${moveInRight} 1s ease-out;

    @media only screen and (max-width: 37.5em) {
        letter-spacing: .5rem;
    }
`;