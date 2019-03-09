import styled from 'styled-components';
import img from '../../img/maintenance.jpg'

export const Header = styled.div`
    height: 95vh;
    background-image: linear-gradient(
        to right bottom,
        rgba(68, 70, 73, 0.8),
        rgba(39, 60, 180, 0.8)),
    url(${img});
    background-size: cover;
    background-position: top;
    position: relative;

    @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
        -webkit-clip-path: polygon(0 0, 100% 3vh, 100% 100%, 0 100%);
        clip-path: polygon(0 0, 100% 3vh, 100% 100%, 0 100%);
        height: 90vh;
    }
    
    @media (min-width: 192dpi) and (min-width: 37.5em),
        only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
        only screen and (min-width: 125em) {
            background-image: linear-gradient(
                to right bottom,
                rgba(68, 70, 73, 0.8),
                rgba(39, 60, 180, 0.8)),
            url(${img});
        }

    /* @include respond(phone) {

    } */
`;

export const Header__logo_box = styled.div`
    position: absolute;
    top: 1rem;
    left: 1rem;
`;

export const Header__logo = styled.img`
    height: 15rem;
`;

export const Header__text_box = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;