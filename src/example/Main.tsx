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
                <CollapsableSidebarItem text="Primary">
                    <CollapsableSidebarItem text="Secondary">
                        <SidebarItem text="Tertiary"></SidebarItem>
                    </CollapsableSidebarItem>
                </CollapsableSidebarItem>
                <CollapsableSidebarItem text="Primary">
                    <SidebarItem text="Secondary"></SidebarItem>
                </CollapsableSidebarItem>
            </Sidebar>
        </div>
    )
}