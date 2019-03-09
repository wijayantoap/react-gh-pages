import styled from 'styled-components';
import img from '../../img/tavern.jpg'

export const LoginSection = styled.div`
    padding: 5rem 0;
    background-image: linear-gradient(to left top, rgb(114, 68, 59, .4), #72443b);

    @media only screen and (max-width: 56.25em) {
        padding: 10rem 0;
    }
`;

export const FormSection = styled.div`
    background-image: linear-gradient(
        105deg, 
        rgba(255, 255, 255, .9) 0%, 
        rgba(255, 255, 255, .9) 50%, 
        transparent 50%),
        url(${img});
    background-size: 100%;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .2);
    height: 80vh;
    background-position: center bottom;

    @media only screen and (max-width: 56.25em) {
        background-image: linear-gradient(
            105deg, 
            rgba(255, 255, 255, .9) 0%, 
            rgba(255, 255, 255, .9) 65%,
            transparent 65%),
            url(${img});
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media only screen and (max-width: 75em) {
        background-image: linear-gradient(
            105deg, 
            rgba(255, 255, 255, .9) 0%, 
            rgba(255, 255, 255, .9) 100%),
            url(${img});
    }
`;

export const Form = styled.form`
    width: 50%;
    padding: 6rem;

    @media only screen and (max-width: 56.25em) {
        width: 65%;
    }

    @media only screen and (max-width: 75em) {
        width: 100%;
        padding: 6rem 0;
    }
`;