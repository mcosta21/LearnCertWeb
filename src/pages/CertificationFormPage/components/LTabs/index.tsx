import { ReactElement, ReactNode, useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Add } from "@mui/icons-material";
import { LTabContent } from './TabContent';
import { LTabProps } from "./models";


export default function LTabs({
    currentTab = 'add_more',
    tabs = [],
    onChange,
    onAddTab
}: LTabProps){

    function handleChange(event: React.SyntheticEvent, newValue: string){
        if(newValue === 'add_more') return;
        onChange(newValue);
    }
    
    return (
        <>
        <Tabs value={currentTab} onChange={handleChange} scrollButtons="auto">
            {
                tabs.map((tab, index) => <Tab key={index} value={tab.id} label={tab.name} />)
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
        </>
    );
}