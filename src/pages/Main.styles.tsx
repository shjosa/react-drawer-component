import styled from 'styled-components';

export const Body = styled.div`
width: 20rem;
min-height: 100vh;
background-color: #f5f5f5;
padding: auto;
`;

export const Item = styled.button<{ paddingSize: number | undefined }>`
    display: block;
    width: 100%;
    text-align: justify;
    border: none;
    padding-left: ${props => (props.paddingSize === undefined ? 1 : props.paddingSize + 1)}rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-family: Arial, sans-serif;
    font-size: 1.2rem;
    &:hover:not(:disabled) {
        background-color: lightgrey;
    };
    &:active:not(:disabled) {
        background-color: lightblue;
    }
    &:focus {
        background-color: lightcyan;
        outline-color: blue;
    }
    &:disabled {
        color: grey;
    }
`;