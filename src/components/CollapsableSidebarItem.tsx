import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { SidebarItem, SidebarItemProps } from "./SidebarItem";

export const CollapsableSidebarItem = ({ children, text, paddingSize }: Omit<React.PropsWithChildren<SidebarItemProps>, 'icon' | 'onClick'>) => {
    const [expanded, setExpanded] = useState(false);

    return <SidebarItem icon={expanded ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />} text={text} onClick={() => setExpanded(v => !v)} paddingSize={paddingSize} children={expanded && children} />
}