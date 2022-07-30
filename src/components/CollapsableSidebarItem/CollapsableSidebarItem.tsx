import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { SidebarItemProps } from "../SidebarItem";
import {CollapsableSidebarItemBase} from './CollapsableSidebarItem.styles';

export const CollapsableSidebarItem = ({ children, text, paddingSize, ...props }: Omit<React.PropsWithChildren<SidebarItemProps>, 'icon' | 'onClick'>) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <CollapsableSidebarItemBase 
            {...props}
            icon={
                expanded ? 
                <MdKeyboardArrowUp color={props.disabled ? 'rgba(42, 55, 81, 0.64)' : "#1A42E5"} /> :
                <MdKeyboardArrowDown color={props.disabled ? 'rgba(42, 55, 81, 0.64)' : "#1A42E5"} /> 
            } 
            expanded={expanded}
            text={text} 
            onClick={() => setExpanded(v => !v)} 
            paddingSize={paddingSize} 
            children={expanded && children}
        />
    )
}