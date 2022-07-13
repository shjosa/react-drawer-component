import React, { useState } from 'react';
import { JSXElementConstructor } from 'react';
import { setConstantValue } from 'typescript';
import { Header } from '../components/Header';
import { Body, Item } from './Main.styles';

interface SidebarItemProps {
    children?: JSX.Element;
    text: string;
    isChild?: number;
}

const SidebarItem = ({ children, text, isChild }: SidebarItemProps) => {

    const [state, setState] = useState("enabled");

    const childrenArr = React.Children.toArray(children).map((child) =>
        React.cloneElement(child as React.ReactElement<SidebarItemProps, string | JSXElementConstructor<any>>, {
          isChild: isChild === undefined ? 1 : isChild + 1,
        })
    );

    function editState(status: string, text: string) {
        setState(status);
        console.log(text + ": " + status);
    };

    return (
        <>
            <Item isChild={isChild} onMouseEnter={() => console.log(text + " " + isChild)}>
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
            <SidebarItem text="Primary"></SidebarItem>
        </Body>
    )
}