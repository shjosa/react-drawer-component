import React, { useState } from 'react';
import { JSXElementConstructor } from 'react';
import { Header } from '../components/Header';
import { Body, Item } from './Main.styles';

interface SidebarItemProps {
    children?: JSX.Element;
    text: string;
    paddingSize?: number;
}

const SidebarItem = ({ children, text, paddingSize }: SidebarItemProps) => {

    const childrenArr = React.Children.toArray(children).map((child) =>
        React.cloneElement(child as React.ReactElement<SidebarItemProps, string | JSXElementConstructor<any>>, {
          paddingSize: paddingSize === undefined ? 1 : paddingSize + 1,
        })
    );

    return (
        <>
            <Item paddingSize={paddingSize} disabled>
                <div>{text}</div>
            </Item>
            {childrenArr}
        </>
        
    );
}

export const Main = () => {
    return (
        <Body>
            <Header />
            <SidebarItem text="Primary">
                <SidebarItem text="Secondary">
                    <SidebarItem text="Tertiary"></SidebarItem>
                </SidebarItem>
            </SidebarItem>
            <SidebarItem text="Primary">
                <SidebarItem text="Secondary"></SidebarItem>
            </SidebarItem>
        </Body>
    )
}