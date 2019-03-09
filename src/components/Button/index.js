import React from 'react';
import styled from 'styled-components';
import { moveInBottom } from '../../base/Animation';

export const Button = styled.a`
    &, :link, :visited {
        text-decoration: none;
        padding: 1.5rem 4rem;
        display: inline-block;
        border-radius: 10rem;
        transition: all .2s;
        position: relative;
        font-size: 1.6rem;

        border: none;
        cursor: pointer;

        animation: ${moveInBottom} .5s ease-out .75s;
        animation-fill-mode: backwards;

        background-color: ${props => props.background || 'white'};
        color: ${props => props.color || '#777'}
    }

    :hover {
        transform: translateY(-3px);
        box-shadow: 0 1rem 2rem rgba(255, 255, 255, .2);

        ::after {
            transform: scaleX(1.4) scaleY(1.6);
            opacity: 0;
        }
    }

    :active, :focus {
        outline: none;
        transform: translateY(-1px);
        box-shadow: 0 .5rem 1rem rgba(255, 255, 255, .2);
    }

    ::after {
        content: "";
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 10rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        transition: all .4s;
    }
`;
