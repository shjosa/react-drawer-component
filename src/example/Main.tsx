import React from 'react';
import { Body } from './Main.styles';
import { Sidebar, SidebarHeader, SidebarItem, CollapsableSidebarItem } from '../components';

export const Main = () => {
    return (
        <Body>
            <Sidebar>
                <SidebarHeader>Header</SidebarHeader>
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