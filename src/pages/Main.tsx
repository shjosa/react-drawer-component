import React, { useState } from 'react';
import { JSXElementConstructor } from 'react';
import { Header } from '../components/Header';
import { Body, Item } from './Main.styles';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface SidebarItemProps {
    text: string;
    paddingSize?: number;
    icon?: JSX.Element;
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
                { icon }
            </Item>
            {childrenArr}
        </>
        
    );
}

const CollapsableSidebarItem = ({ children, text, paddingSize }: Omit<React.PropsWithChildren<SidebarItemProps>, 'icon' | 'onClick'>) => {
    const [expanded, setExpanded] = useState(false);

    return <SidebarItem icon={expanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />} text={text} onClick={() => setExpanded(v => !v)} paddingSize={paddingSize} children={expanded && children} />
}

const Sidebar = ({ children }: React.PropsWithChildren) => {
    return (
        <>
            {children}
        </>
    )
}

export const Main = () => {
    return (
        <Body>
            <Sidebar>
                <Header />
                <CollapsableSidebarItem text="Primary">
                    <CollapsableSidebarItem text="Secondary">
                        <SidebarItem text="Tertiary"></SidebarItem>
                    </CollapsableSidebarItem>
                </CollapsableSidebarItem>
                <CollapsableSidebarItem text="Primary">
                    <SidebarItem text="Secondary"></SidebarItem>
                </CollapsableSidebarItem>
            </Sidebar>
        </Body>
    )
}