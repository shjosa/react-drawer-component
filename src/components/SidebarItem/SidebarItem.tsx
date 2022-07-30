import React, { JSXElementConstructor } from "react";
import { Item } from "./SidebarItem.styles";

export type SidebarItemProps = {
    text: string;
    paddingSize?: number;
    icon?: JSX.Element;
    onClick?: () => void;
    expanded?: boolean;
    className?: string;
} & Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>;

export const SidebarItem = ({ children, text, paddingSize, icon, onClick, expanded, className, ...props }: React.PropsWithChildren<SidebarItemProps>) => {
    
    const childrenArr = React.Children.toArray(children).map((child) =>
        React.cloneElement(child as React.ReactElement<SidebarItemProps, string | JSXElementConstructor<any>>, {
          paddingSize: paddingSize === undefined ? 1 : paddingSize + 1,
        })
    );

    return (
        <>
            <Item {...props} paddingSize={paddingSize} onClick={onClick} expanded={expanded} className={className}>
                <span>{text}</span>
                { icon }
            </Item>
            {childrenArr}
        </>
        
    );
}