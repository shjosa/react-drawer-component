import React from 'react';
import styled from 'styled-components';

export const SidebarHeader = ({ children }: React.PropsWithChildren) => {
    const Title = styled.h1`
        font-size: 1.5em;
        padding-left: 5%;
        padding-top: 4%;
    `;

    return (
        <>
            <Title>
                {children}
            </Title>
            <hr />
        </>
    );
}