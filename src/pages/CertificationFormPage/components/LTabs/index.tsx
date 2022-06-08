import { ReactElement, ReactNode, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Add } from "@mui/icons-material";
import { LTabContent } from './TabContent';
import { LTabProps } from "./models";
import { STabsContainer } from './styles';

export default function LTabs({
    currentTab = 'add_more',
    tabs = [],
    onChange,
    onAddTab,
    onRightClick
}: LTabProps){

    function handleChange(event: React.SyntheticEvent, newValue: string){
        if(newValue === 'add_more') return;
        onChange(newValue);
    }
    
    return (
        <STabsContainer>

            <Tabs value={currentTab} onChange={handleChange} scrollButtons="auto">
                {
                    tabs.map((tab, index) => (
                        <Tab 
                            key={index} 
                            value={tab.id} 
                            label={tab.name} 
                            icon={tab.icon} 
                            iconPosition={tab.iconPosition}
                            className={tab.invalid ? 'invalid' : ''}
                            onContextMenu={(e) => {
                                if(onRightClick) {
                                    e.preventDefault(); 
                                    onRightClick(tab, e);
                                }
                            }}
                        />
                    ))
                }
                <Tab icon={<Add />} value="add_more" onClick={onAddTab}/>

            </Tabs>

            {
                tabs.map((tab, index) => (
                    <LTabContent key={index} value={tab.id} visible={currentTab === tab.id}>
                        {tab.tab}
                    </LTabContent>
                    )
                )
            }

        </STabsContainer>
    );
}