import React, { JSXElementConstructor } from "react";
import { Item } from "./SidebarItem.styles";

export interface SidebarItemProps {
    text: string;
    paddingSize?: number;
    icon?: JSX.Element;
    onClick?: () => void;
}

export const SidebarItem = ({ children, text, paddingSize, icon, onClick }: React.PropsWithChildren<SidebarItemProps>) => {
    
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