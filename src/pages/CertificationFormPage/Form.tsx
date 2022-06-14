import React, { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Check, Edit, Warning } from '@mui/icons-material';
import { Button, IconButton, Popover } from "@mui/material";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { Certification, Module } from "./models/certification.model";
import { CertificationValidation } from "./models/certification.validation";
import { SCertificationFooter, SCertificationForm, SCertificationInputs, SModuleTabsContainer, SPopoverModule } from "./styles";

import LBody from "@components/LBody";
import { LTabModel } from '@components/LTabs/models';
import LTabs from '@components/LTabs';
import { LDashedButton } from '@components/LDashedButton';
import { LInput } from "@components/LInput";
import { LLabel } from '@components/LLabel';
import { ModuleTab, ModuleTabProps } from './components/ModuleTab';

interface Props {
    certification?: Certification;
}

export default function CertificationForm({
    certification
}: Props){

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        control,
        getValues,
    } = useForm<Certification>({ 
        resolver: yupResolver(CertificationValidation),
        defaultValues: certification
    });

    const { fields, append, update  } = useFieldArray({
        control,
        name: "modules",
    });

    const [currentTab, setCurrentTab] = useState<number>();

    const [moduleTabs, setModuleTabs] = useState<LTabModel[]>([]);
    const [titleModule, setTitleModule] = useState<string>("");
    const [inputModule, setInputModule] = useState<HTMLElement | undefined>(undefined);
    const open = Boolean(inputModule);
    const id = open ? 'imput-module' : undefined;
    const [isNew, setIsNew] = useState(true);

    useEffect(() => {
        if(!certification) return;
        const moduleTabs = certification.modules.map((module, index) => createModuleTab(index, module));
        setModuleTabs(moduleTabs);
    }, []);

    useEffect(() => {
        if(certification?.modules[0]) {
            setCurrentTab(0);
        }
    }, []);

    useEffect(() => {
        if(errors.modules) {
            validateTabs();
        }
    }, [errors]);

    function handleOpenInputModule(event?: React.MouseEvent<HTMLElement>) {
        setInputModule(inputModule ? undefined : event?.currentTarget);
    };

    function handleCloseInputModule(){
        setTitleModule('');
        setIsNew(true);
        setInputModule(undefined);
    }

    function handleAddModule(){
        console.log('add module')

        const module = new Module(titleModule, fields.length + 1);
        append(module);

        const index = fields.length;

        setModuleTabs(oldState => [...oldState, createModuleTab(index, module)]);

        setTitleModule('');
        handleCloseInputModule();
        setCurrentTab(index);
        setIsNew(true)
    }

    function createModuleTab(index: number, module: Module){
        
        const content = {
            index,
            control,
        } as ModuleTabProps;

        const component = React.createElement(ModuleTab, { ...content });
        return new LTabModel(module.id, module.title, component)
    }

    function handleChangeTab(selectedTab: number) {
        setCurrentTab(selectedTab);
        setTitleModule('');
        setIsNew(true);
    }

    const onSubmit: SubmitHandler<Certification> = async data => {
        console.log(data)
    };

    function validateTabs(){
        const newModuleTabs = moduleTabs.map((tab, index) => {
            const invalid = !!control.getFieldState(`modules.${index}`).error;
            tab.icon = invalid ? <Warning /> : undefined;
            tab.iconPosition = invalid ? 'end' : undefined;
            tab.invalid =  invalid;
            return tab;
        });
        setModuleTabs(newModuleTabs);
    }

    function handleRightClickTab(index: number, tab: LTabModel, event?: React.MouseEvent<HTMLElement>) {
        setCurrentTab(index);
        handleOpenInputModule(event);
        setTitleModule(tab.name);
        setIsNew(false);
    }

    function handleUpdateModule() {
        if(currentTab === undefined) return;
        const updatedTab = fields[currentTab];
        updatedTab.title = titleModule;
        update(currentTab, updatedTab);
        setTitleModule('');
        handleCloseInputModule();
        setIsNew(true);

        const updatedModulesTabs = getValues('modules').map((x, index) => createModuleTab(index, x));
        console.log(updatedModulesTabs)
        setModuleTabs(updatedModulesTabs);
        setCurrentTab(currentTab);
    }

    return (
        <LBody>
            <SCertificationForm onSubmit={handleSubmit(onSubmit)}>

                <SCertificationInputs>

                    <LDashedButton type="button" width="200px" height="155px">
                        ADD_IMAGE    
                    </LDashedButton>     

                    <div>
                        <LInput 
                            label="CERTIFICATION.TITLE"
                            error={errors.title?.message}
                            required
                            {...register("title")} 
                        />

                        <LInput 
                            label="CERTIFICATION.IMAGE_URL"
                            error={errors.imageUrl?.message}
                            hideError
                            {...register("imageUrl")} 
                        />   
                    </div>            

                </SCertificationInputs>

                <SModuleTabsContainer>
                    <LLabel value="MODULE.TITLE" />
                    <LTabs 
                        currentTab={currentTab} 
                        onChange={handleChangeTab}
                        tabs={moduleTabs} 
                        onAddTab={handleOpenInputModule}
                        onRightClick={handleRightClickTab}
                    />
                </SModuleTabsContainer>
                
                <SCertificationFooter>
                    <Button variant="contained" size="medium" type="submit">
                        SAVE
                    </Button>
                </SCertificationFooter>

                <Popover 
                    id={id} 
                    open={open} 
                    anchorEl={inputModule}
                    onClose={handleCloseInputModule}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <SPopoverModule>
                        <LInput 
                            label="MODULE.TITLE"
                            width="300px"
                            required
                            hideError
                            value={titleModule}
                            onChange={(event) => setTitleModule(event.currentTarget.value)}
                        />

                        {
                            isNew ? (
                                <IconButton 
                                    aria-label="add-module"
                                    onClick={() => handleAddModule()} 
                                    disabled={!titleModule}
                                >
                                    <Check />
                                </IconButton>
                            ) : (
                                <IconButton 
                                    aria-label="update-module"
                                    size="small" 
                                    onClick={() => handleUpdateModule()} 
                                >
                                    <Edit />
                                </IconButton>
                            )
                        }
                        
                        
                    </SPopoverModule>
                </Popover>
            </SCertificationForm>
        </LBody>
    )
}