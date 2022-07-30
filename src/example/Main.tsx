import React from 'react';
import { Sidebar, SidebarDivider, SidebarItem, CollapsableSidebarItem } from '../components';
import {LogoContainer} from './Main.styles';
import Image from '../assets/oceanbit_logo.png';

export const Main = () => {
    return (
        <div>
            <Sidebar>
                <LogoContainer>
                    <img src={Image} alt="OceanBit" width={150}/>
                </LogoContainer>
                <SidebarDivider/>
                <SidebarItem text="Primary"/>
                <SidebarItem text="Primary"/>
                <CollapsableSidebarItem text="Primary">
                    <CollapsableSidebarItem text="Secondary">
                    <SidebarItem text="Tertiary"></SidebarItem>
                    <SidebarItem text="Tertiary"></SidebarItem>
                    <SidebarItem text="Tertiary"></SidebarItem>
                    <SidebarItem text="Tertiary"></SidebarItem>
                    </CollapsableSidebarItem>
                </CollapsableSidebarItem>
                <SidebarDivider/>
                <SidebarItem text="Primary"/>
                <CollapsableSidebarItem text="Primary" disabled={true}>
                    <SidebarItem text="Secondary"></SidebarItem>
                    <SidebarItem text="Secondary"></SidebarItem>
                </CollapsableSidebarItem>
                <CollapsableSidebarItem text="Primary">
                    <SidebarItem text="Secondary"></SidebarItem>
                    <SidebarItem text="Secondary"></SidebarItem>
                </CollapsableSidebarItem>
            </Sidebar>
        </div>
    )
}