import styled from 'styled-components';

export const Body = styled.div`
width: 20%;
/*border: 1px solid #444;*/
min-height: 100vh;
background-color: #f5f5f5;
padding: auto;
`;

export const Item = styled.div<{ isChild: number | undefined }>`
    padding-left: ${props => (props.isChild === undefined ? 1 : props.isChild + 1)}rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-family: Arial, sans-serif;
    font-size: 1.2rem;
    &:hover {
        background-color: lightgrey;
    };
`;