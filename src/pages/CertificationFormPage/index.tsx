import { yupResolver } from '@hookform/resolvers/yup';
import { Popover } from "@mui/material";
import { LLabel } from '../../components/LLabel';
import React, { FunctionComponentElement, useEffect } from 'react';
import { useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import LBody from "../../components/LBody";
import { LInput } from "../../components/LInput";
import LTabs from "./components/LTabs";
import { LTabModel } from './components/LTabs/models';
import { ModuleTab, ModuleTabProps } from './components/ModuleTab';
import { Certification, Module } from "./models/certification.model";
import { CertificationValidation } from "./models/certification.validation";
import { SModuleTabsContainer, SPopoverModule } from "./styles";

interface Props {

}

export default function CertificationFormPage({

}: Props){

    const { 
        register, 
        handleSubmit, 
        formState: { errors },
        control,
        getValues,
        getFieldState,
        setValue,
        watch
    } = useForm<Certification>({ resolver: yupResolver(CertificationValidation) });

    const { fields, append, prepend } = useFieldArray({
        control,
        name: "modules"
    });

    const [currentTab, setCurrentTab] = useState<string>();

    const [moduleTabs, setModuleTabs] = useState<LTabModel[]>([]);
    const [titleModule, setTitleModule] = useState<string>('Modulo 1');
    const [inputModule, setInputModule] = useState<HTMLElement | undefined>(undefined);
    const open = Boolean(inputModule);
    const id = open ? 'imput-module' : undefined;

    useEffect(() => {

        handleAddModule();

        if(getValues().modules[0]) {
            setCurrentTab(getValues().modules[0].id);
        }
    }, []);

    function handleOpenInputModule(event?: React.MouseEvent<HTMLElement>) {
        setInputModule(inputModule ? undefined : event?.currentTarget);
    };

    function handleCloseInputModule(){
        setInputModule(undefined);
    }

    function handleAddModule(){

        const modules = getValues('modules') ?? [];
        const module = new Module(titleModule);
        setValue('modules', [...modules, module]);

        const index = modules.length;

        setModuleTabs(oldState => [...oldState, createModuleTab(index, module)]);

        setTitleModule('');
        handleCloseInputModule();
        setCurrentTab(module.id);
    }

    function createModuleTab(index: number, module: Module){
        
        const content = {
            index,
            control,
        } as ModuleTabProps;

        const component = React.createElement(ModuleTab, { ...content });
        return new LTabModel(module.id, module.title, component)
    }

    function handleChangeTab(selectedTab: string) {
        setCurrentTab(selectedTab);
    }

    const onSubmit: SubmitHandler<Certification> = async data => {
        console.log(data)
    };

    return (
        <LBody>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <img src={getValues().imageUrl} height="140"/>
                    <h4>{getValues().title}</h4>
                </div>
                <LInput 
                    label="CERTIFICATION.TITLE"
                    error={errors.title?.message}
                    {...register("title")} 
                />

                <LInput 
                    label="CERTIFICATION.IMAGE_URL"
                    error={errors.imageUrl?.message}
                    {...register("imageUrl")} 
                />
                
                <SModuleTabsContainer>
                    <LLabel value="MODULE.TITLE" />
                    <LTabs 
                        currentTab={currentTab} 
                        onChange={handleChangeTab}
                        tabs={moduleTabs} 
                        onAddTab={handleOpenInputModule} 
                    />
                </SModuleTabsContainer>
                
                <input type="submit" />

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
                            onChange={(event) => setTitleModule(event.currentTarget.value)}
                        />
                        
                        <button onClick={() => handleAddModule()} disabled={!titleModule}>
                            Add module
                        </button>
                    </SPopoverModule>
                </Popover>
            </form>
        </LBody>
    )
}