import React from "react"
import {SidebarContainer} from './Sidebar.styles';

export const Sidebar = ({ children }: React.PropsWithChildren) => {
    return (
        <SidebarContainer>
            {children}
        </SidebarContainer>
    )
}