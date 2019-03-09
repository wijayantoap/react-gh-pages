import styled from 'styled-components';

export const Input = styled.input`
    font-size: 1.5rem;
    font-family: inherit;
    color: inherit;
    padding: 1.5rem 2rem;
    border-radius: 2px;
    background-color: rgba(255, 255, 255, .5);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    transition: all .3s;

    @media only screen and (max-width: 56.25em) {
        width: 100%;
    }

    :focus {
        outline: none;
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, .1);
        border-bottom: 3px solid blue;
    }

    :focus:invalid {
        border-bottom: 3px solid red;
    }

    ::-webkit-input-placeholder {
        color: black;
    }
`;

export const Label = styled.label`
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 2rem;
    margin-top: .7rem;
    display: block;
    transition: all .3s;
`;