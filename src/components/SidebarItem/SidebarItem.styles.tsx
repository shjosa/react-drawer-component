import styled from "styled-components";

export const Item = styled.button<{ paddingSize?: number, expanded?: boolean }>`
    display: flex;
    width: 100%;
    text-align: justify;
    border: none;
    padding-left: ${props => (props.paddingSize === undefined ? 1 : props.paddingSize + 1)}rem;
    padding-right: 1rem;
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
    font-family: Arial, sans-serif;
    font-size: 1.2rem;
    justify-content: space-between;
    align-items: center;
    background: transparent;

    ${props => props.expanded ? 'color: #1A42E5;' : ''}

    &:hover:not(:disabled) {
        background-color: rgba(42, 55, 81, 0.08);
    }

    &:active:not(:disabled) {
        background-color: rgba(26, 66, 229, 0.16);
        color: #1A42E6;
    }

    &:focus {
        background-color: rgba(26, 66, 229, 0.04);
        outline: 2px solid rgba(26, 66, 229, 0.64);
    }

    &:disabled {
        color: rgba(42, 55, 81, 0.64);
    }
`;