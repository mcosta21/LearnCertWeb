import { ReactElement, ReactNode, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Add } from "@mui/icons-material";
import { LTabContent } from './TabContent';
import { LTabProps } from "./models";
import { STabsContainer } from './styles';

const ADD_TAB_INDEX = -1;

export default function LTabs({
    currentTab = ADD_TAB_INDEX,
    tabs = [],
    onChange,
    onAddTab,
    onRightClick
}: LTabProps){

    function handleChange(event: React.SyntheticEvent, newValue: number){
        if(newValue === ADD_TAB_INDEX) return;
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
                <Tab icon={<Add />} value={ADD_TAB_INDEX} onClick={onAddTab}/>

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