import React, { useState } from 'react';
import { JSXElementConstructor } from 'react';
import { Header } from '../components/Header';
import { Body, Item } from './Main.styles';

interface SidebarItemProps {
    text: string;
    paddingSize?: number;
    icon?: string;
    onClick?: () => void;
}

const SidebarItem = ({ children, text, paddingSize, icon, onClick }: React.PropsWithChildren<SidebarItemProps>) => {

    const childrenArr = React.Children.toArray(children).map((child) =>
        React.cloneElement(child as React.ReactElement<SidebarItemProps, string | JSXElementConstructor<any>>, {
          paddingSize: paddingSize === undefined ? 1 : paddingSize + 1,
        })
    );

    return (
        <>
            <Item paddingSize={paddingSize} onClick={onClick}>
                <span>{text}</span>
                { icon && <span>{icon}</span> }
            </Item>
            {childrenArr}
        </>
        
    );
}

const CollapsableSidebarItem = ({ children, text, paddingSize }: Omit<React.PropsWithChildren<SidebarItemProps>, 'icon' | 'onClick'>) => {
    const [expanded, setExpanded] = useState(false);

    return <SidebarItem icon={expanded ? 'e' : 'c'} text={text} onClick={() => setExpanded(v => !v)}>
        {expanded && <>
            {children}
        </>}
    </SidebarItem>
}

export const Main = () => {
    return (
        <Body>
            <Header />
            <CollapsableSidebarItem text="Primary">
                <SidebarItem text="Secondary">
                    <SidebarItem text="Tertiary"></SidebarItem>
                </SidebarItem>
            </CollapsableSidebarItem>
            <SidebarItem text="Primary">
                <SidebarItem text="Secondary"></SidebarItem>
            </SidebarItem>
        </Body>
    )
}