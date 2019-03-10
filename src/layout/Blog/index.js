import styled from 'styled-components';
import img from '../../img/discover.jpeg'

export const BlogCover = styled.div`
    padding: 5rem 0;
    background-image: linear-gradient(to left top, rgb(114, 68, 59, .4), #72443b);
`;

export const BlogSection = styled.div`
    background-image: linear-gradient(
        90deg, 
        rgba(255, 255, 255, .9) 0%, 
        rgba(255, 255, 255, .9) 58%, 
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
        height: 60vh;
    }

    @media only screen and (max-width: 75em) {
        background-image: linear-gradient(
            105deg, 
            rgba(255, 255, 255, .9) 0%, 
            rgba(255, 255, 255, .9) 100%),
            url(${img});
    }
`;

export const BlogList = styled.div`
    width: 50%;
    padding: 0 3rem;

    @media only screen and (max-width: 56.25em) {
        width: 65%;
    }

    @media only screen and (max-width: 75em) {
        width: 100%;
        padding: 6rem 0;
    }
`;

export const BlogTitle = styled.a`
    &, :link, :visited {
        display: inline-block;
        font-size: 3rem;
        font-weight: 300;
        padding: 1rem 2rem;
        color: #777;
        text-decoration: none;
        background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);
        background-size: 220%;
        transition: all .4s;

        span {
            margin-right: 1.5rem;
            display: inline-block;
        }
    }

    :hover, :active {
        background-position: 100%;
        color: #72443b;
        transform: translateX()1rem;
    }
`;

