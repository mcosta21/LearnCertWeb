import { yupResolver } from '@hookform/resolvers/yup';
import { Check } from '@mui/icons-material';
import { Button, IconButton, Popover } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import LBody from "../../components/LBody";
import { LInput } from "../../components/LInput";
import { LLabel } from '../../components/LLabel';
import LTabs from "./components/LTabs";
import { LTabModel } from './components/LTabs/models';
import { ModuleTab, ModuleTabProps } from './components/ModuleTab';
import { Certification, Module } from "./models/certification.model";
import { CertificationValidation } from "./models/certification.validation";
import { SCertificationFooter, SModuleTabsContainer, SPopoverModule, SCertificationForm } from "./styles";

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
        setValue,
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
            <SCertificationForm onSubmit={handleSubmit(onSubmit)}>
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
                
                <SCertificationFooter>
                    <Button variant="contained" size="medium" type="submit" >
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
                            hideError
                            onChange={(event) => setTitleModule(event.currentTarget.value)}
                        />

                        <IconButton 
                            aria-label="add-module"
                            onClick={() => handleAddModule()} 
                            disabled={!titleModule}
                        >
                            <Check />
                        </IconButton>
                        
                    </SPopoverModule>
                </Popover>
            </SCertificationForm>
        </LBody>
    )
}