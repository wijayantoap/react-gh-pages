import styled from 'styled-components';
import img from '../../img/image404.jpg'

export const Header404 = styled.div`
    height: 95vh;
    background-image: linear-gradient(
        to right bottom,
        rgba(68, 70, 73, 0.8),
        rgba(39, 60, 180, 0.8)),
    url(${img});
    background-size: cover;
    position: relative;
    background-position: center bottom;
`;

export const Header__text_box = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;