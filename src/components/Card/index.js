import React from 'react';
import styled from 'styled-components';

// Will do later

export const Card = styled.div`
    perspective: 150rem;
    -moz-perspective: 150rem;
    position: relative;
    height: 52rem;
`;

export const Card__Side = styled.div`
    height: 52rem;
    transition: all .8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba(#000, .15);
`;

export const Card__Side__front = styled.div`
    background-color: #fff;
`;

export const Card__Side__back = styled.div`
    transform: rotateY(180deg);

`;