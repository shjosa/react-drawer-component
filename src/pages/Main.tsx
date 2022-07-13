import React, { PropsWithChildren } from 'react';
import { JSXElementConstructor } from 'react';
import { Header } from '../components/Header';
import { Body, Item } from './Main.styles';

interface SidebarItemProps {
    children?: JSX.Element;
    text: string;
    isChild?: boolean;
}

const SidebarItem = ({ children, text, isChild }: SidebarItemProps) => {

    const childrenArr = React.Children.toArray(children).map((child) =>
        React.cloneElement(child as React.ReactElement<SidebarItemProps, string | JSXElementConstructor<any>>, {
          isChild: true,
        })
    );

    return (
        <>
            <Item>
                <div>{text}</div>
                {children}
            </Item>
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
            <SidebarItem text="Primary"></SidebarItem>
        </Body>
    )
}