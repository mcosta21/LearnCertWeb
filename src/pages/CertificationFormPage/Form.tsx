import React, { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { Check, Edit, Warning } from '@mui/icons-material';
import { Button, IconButton, MenuItem, Popover, Select, SelectChangeEvent } from "@mui/material";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import { Certification, LanguageType, LanguageTypes, Module } from "./domain/certification.model";
import { CertificationValidation } from "./domain/certification.validation";
import { SCertificationFooter, SCertificationForm, SCertificationInputs, SModuleTabsContainer, SPopoverModule } from "./styles";

import LBody from "@components/LBody";
import { LTabModel } from '@components/LTabs/models';
import LTabs from '@components/LTabs';
import { LDashedButton } from '@components/LDashedButton';
import { LInput } from "@components/LInput";
import { LLabel } from '@components/LLabel';
import { ModuleTab, ModuleTabProps } from './components/ModuleTab';
import * as api from './services/certification.api';
import LSelect from '@components/LSelect';
import Translate from '@services/i18nProvider/Translate';
import { RouterKey } from '@routes/routekeys';
import { useNavigate } from 'react-router-dom';

interface Props {
    certification?: Certification;
    isNew: boolean;
}

export default function CertificationForm({
    certification,
    isNew
}: Props){

    const { 
        register, 
        handleSubmit, 
        formState: { errors, isValid },
        control,
        setValue,
        getValues,
    } = useForm<Certification>({ 
        resolver: yupResolver(CertificationValidation),
        defaultValues: certification
    });

    const [languageType, setLanguageType] = useState<LanguageType | undefined>(certification?.languageType);

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
    const [isNewModule, setIsNewModule] = useState(true);

    const navigate = useNavigate();

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
        setIsNewModule(true);
        setInputModule(undefined);
    }

    function handleAddModule(){
        const module = new Module(titleModule, fields.length + 1);
        append(module);

        const index = fields.length;

        setModuleTabs(oldState => [...oldState, createModuleTab(index, module)]);

        setTitleModule('');
        handleCloseInputModule();
        setCurrentTab(index);
        setIsNewModule(true)
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
        setIsNewModule(true);
    }

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
        setIsNewModule(false);
    }

    function handleUpdateModule() {
        if(currentTab === undefined) return;
        const updatedTab = fields[currentTab];
        updatedTab.title = titleModule;
        update(currentTab, updatedTab);
        setTitleModule('');
        handleCloseInputModule();
        setIsNewModule(true);

        const updatedModulesTabs = getValues('modules').map((x, index) => createModuleTab(index, x));
        setModuleTabs(updatedModulesTabs);
        setCurrentTab(currentTab);
    }

    function handleSelectLanguageType(event: SelectChangeEvent) {
        const selectedValue = event.target.value as LanguageType;
        setValue('languageType', selectedValue);
        setLanguageType(selectedValue);
    }

    const onSubmit: SubmitHandler<Certification> = async data => {
        try {
            if(isNew) {
                await api.save(data);
            }
            else {
                await api.update(data);
            }
        }
        catch(e) {
            alert(e);
        }
    };

    function handleBack(){
        navigate(RouterKey.CertificationList);
    }

    return (
        <LBody>
            <SCertificationForm onSubmit={handleSubmit(onSubmit)}>

                <SCertificationInputs>

                    {
                        !!getValues('imageUrl') ? 
                            <img src={getValues('imageUrl')} />  
                         : 
                            <LDashedButton type="button" width="200px" height="155px">
                                <Translate value="CERTIFICATION.NO_IMAGE" />
                            </LDashedButton> 
                    }

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

                        <LSelect
                            label="CERTIFICATION.LANGUAGE_TYPE"
                            defaultValue={languageType}
                            onChange={handleSelectLanguageType}
                            hideError
                            required
                        >
                            {LanguageTypes.map(x => <MenuItem key={x} value={x}>{x}</MenuItem>)}
                        </LSelect> 
                    </div>            

                </SCertificationInputs>

                <SModuleTabsContainer>
                    <LLabel value="MODULE.LABEL" />
                    <LTabs 
                        currentTab={currentTab} 
                        onChange={handleChangeTab}
                        tabs={moduleTabs} 
                        onAddTab={handleOpenInputModule}
                        onRightClick={handleRightClickTab}
                    />
                </SModuleTabsContainer>
                
                <SCertificationFooter>
                    <Button 
                        variant="contained" 
                        size="medium" 
                        type="button"
                        onClick={handleBack}
                    >
                        <Translate value="BACK" />
                    </Button>
                    <Button 
                        variant="contained" 
                        size="medium" 
                        type="submit"
                        disabled={!isValid}
                    >
                        <Translate value="SAVE" />
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