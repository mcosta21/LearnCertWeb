import { ReactElement, ReactNode, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Add } from "@mui/icons-material";
import { LTabContent } from './TabContent';
import { LTabProps } from "./models";
import { STabsContainer } from './styles';

export default function LTabs({
    currentTab = -1,
    tabs = [],
    onChange,
    onAddTab,
    onRightClick
}: LTabProps){

    function handleChange(event: React.SyntheticEvent, newValue: number){
        if(newValue === -1) return;
        onChange(newValue);
    }
    
    return (
        <STabsContainer>

            <Tabs value={currentTab} onChange={handleChange} scrollButtons="auto">
                {
                    tabs.map((tab, index) => (
                        <Tab 
                            key={index} 
                            value={index} 
                            label={tab.name} 
                            icon={tab.icon} 
                            iconPosition={tab.iconPosition}
                            className={tab.invalid ? 'invalid' : ''}
                            onContextMenu={(e) => {
                                if(onRightClick) {
                                    e.preventDefault(); 
                                    onRightClick(index, tab, e);
                                }
                            }}
                        />
                    ))
                }
                <Tab icon={<Add />} value={-1} onClick={onAddTab}/>

            </Tabs>

            {
                tabs.map((tab, index) => (
                    <LTabContent key={index} value={tab.id} visible={currentTab === index}>
                        {tab.tab}
                    </LTabContent>
                    )
                )
            }

        </STabsContainer>
    );
}