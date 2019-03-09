import React from 'react';
import styled from 'styled-components';

export const FeatureBox = styled.div`
    background-color: rgba(255,255,255, .8);
    font-size: 1.5rem;
    padding: 2.5rem;
    text-align: center;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(#000, .15);
    transition: transform .3s;

    &:hover {
        transform: translateY(1.5rem) scale(1.03);
    }
`;

export const FeatureBox__icon = styled.i`
    font-size: 6rem;
    margin-bottom: .5rem;
    display: inline-block;
    background-image:linear-gradient(to right, #7ed56f, #28b485);
    -webkit-background-clip: text;
    color: transparent;
`;