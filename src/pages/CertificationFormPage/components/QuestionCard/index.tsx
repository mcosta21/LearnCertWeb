import { Add, Clear, Delete, Edit, KeyboardArrowDown, KeyboardArrowUp, Remove } from "@mui/icons-material";
import { FormControlLabel, IconButton, Switch } from "@mui/material";
import { useState } from "react";
import { Control, Controller, useFieldArray } from "react-hook-form";

import { SAnswerOptionContainer, SAnswerOptionInput, SAnswerOptionItem, SAnswerOptionItems, SQuestionCardCollapsed, SQuestionCardContainer, SQuestionCardData, SQuestionInputs } from "./styles";

import { AnswerOption, Certification } from "@pages/CertificationFormPage/domain/certification.model";
import { LAnswerOptionItem } from "@components/LAnswerOptionItem";
import { OptionType } from "@components/LAnswerOptionItem/models";
import { LInput } from "@components/LInput";
import { LLabel } from "@components/LLabel";
import ImageResize from 'quill-image-resize-module-react';

import Translate from '@services/i18nProvider/Translate';

import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
import LIconButton from "@components/LIconButton";
import ClearIcon from '@mui/icons-material/Clear';
 
const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
    imageResize: {
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize']
    }
};

interface Props {
    moduleIndex: number;
    questionIndex: number;
    control: Control<Certification, any>,
    onRemoveQuestion: (index: number) => void;
    collapsed?: boolean;
    onClearDescription: (index: number) => void;
}

export function QuestionCard({
    moduleIndex,
    questionIndex,
    control,
    onRemoveQuestion,
    collapsed = true,
    onClearDescription
}: Props){
    
    Quill.register('modules/imageResize', ImageResize);

    const [newOption, setNewOption] = useState<AnswerOption>(new AnswerOption());
    const [isNew, setIsNew] = useState<boolean>(true);
    const [isCollapsed, setCollapsed] = useState<boolean>(collapsed);

    const { fields, remove, append, update } = useFieldArray({
        control,
        name: `modules.${moduleIndex}.questions.${questionIndex}.answerOptions`
    });
    
    function handleAddAnswerOption(){
        const option = {...newOption, code: fields.length + 1}
        append(option);
        setNewOption(new AnswerOption());
        setIsNew(true);
    }

    function handleUpdateAnswerOption(){
        const index = fields.findIndex(x => x.id === newOption.id);
        update(index, newOption);
        setNewOption(new AnswerOption());
        setIsNew(true);
    }

    function onUpdateAnswerOption(newAnswerOption: AnswerOption) {
        setNewOption(newAnswerOption);
        setIsNew(false);
    }

    function setAnswerDescription(value: string) {
        setNewOption(oldState => { 
            return {...oldState, description: value }
        });
    }

    function toogleAnswerIsCorrect() {
        setNewOption(oldState => { 
            return {...oldState, isCorrect: !oldState.isCorrect }
        });
    }

    function isInvalid(){
        return !newOption || !newOption.description;
    }

    function handleClearAnswerOption(){
        setIsNew(true);
        setNewOption(new AnswerOption());
    }

    function handleRemoveAnswerOption(index: number) {
        remove(index);
    }

    function handleCollapse(){
        const element = document.getElementById(`question-${questionIndex}`);
        if(element) {
            setTimeout(() => element?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
        }

        setCollapsed(oldState => !oldState);
    }

    return (
        <SQuestionCardContainer id={`question-${questionIndex}`}>
            
            <SQuestionCardCollapsed hidden={!isCollapsed}>
                <div>
                    <Controller
                        control={control}
                        defaultValue=""
                        name={`modules.${moduleIndex}.questions.${questionIndex}.description`}
                        render={({ field }) =>
                            (
                                <div className="question-description" dangerouslySetInnerHTML={{ __html: field.value }} />
                            )
                        }
                    />

                    <IconButton 
                        aria-label="collapse-question"
                        size="small" 
                        onClick={handleCollapse} 
                    >
                        <KeyboardArrowDown />
                    </IconButton>
                </div>
            </SQuestionCardCollapsed>

            <SQuestionCardData hidden={isCollapsed}>

                <SQuestionInputs>

                    <aside>
                        <Controller
                            control={control}
                            defaultValue=""
                            name={`modules.${moduleIndex}.questions.${questionIndex}.description`}
                            render={({ field, fieldState }) =>
                                (
                                    <div className="description-editor">
                                        <LLabel value="QUESTION.DESCRIPTION" />
                                        <ReactQuill 
                                            theme="snow" 
                                            {...field} 
                                            modules={modules} 
                                            className="quill-editor"
                                        />
                                    </div>
                                )
                            }
                        />
                    
                        <Controller
                            control={control}
                            defaultValue=""
                            name={`modules.${moduleIndex}.questions.${questionIndex}.learnMore`}
                            render={({ field, fieldState }) =>
                                (
                                    <LInput 
                                        label="QUESTION.LEARN_MORE"
                                        error={fieldState.error?.message}
                                        {...field} 
                                    />
                                )
                            }
                        />

                    </aside>

                    <aside>
                        <div className="question-buttons">
                            <LIconButton 
                                arialLabel="collapse-question"
                                onClick={handleCollapse} 
                                icon={<KeyboardArrowUp />}
                                tooltip="COLLAPSE"
                            />
                            <LIconButton 
                                arialLabel="remove-question"
                                onClick={() => onRemoveQuestion(questionIndex)} 
                                icon={<Delete />}
                                tooltip="REMOVE"
                            />
                            <LIconButton 
                                arialLabel="clear-question-description"
                                onClick={() => onClearDescription(questionIndex)} 
                                icon={<ClearIcon />}
                                tooltip="CLEAR"
                            />
                        </div>
                    </aside>
                    
                </SQuestionInputs>

                <SAnswerOptionContainer>
                    <SAnswerOptionInput>
                        
                        <LInput 
                            label="ANSWER.DESCRIPTION"
                            value={newOption.description}
                            required
                            hideError
                            onChange={(e) => setAnswerDescription(e.target.value)}
                        />

                        <aside>

                            <FormControlLabel 
                                className="answer-is-correct"
                                labelPlacement="top"
                                control={
                                    <Switch 
                                        checked={newOption.isCorrect} 
                                        onChange={toogleAnswerIsCorrect}
                                    />
                                } 
                                label={<Translate value="ANSWER.IS_CORRECT" />} 
                            />

                            {
                                isNew ? (
                                    <IconButton 
                                        aria-label="add-answer"
                                        size="small" 
                                        onClick={() => handleAddAnswerOption()} 
                                        disabled={isInvalid()}
                                    >
                                        <Add />
                                    </IconButton>
                                ) : (
                                    <IconButton 
                                        aria-label="update-answer"
                                        size="small" 
                                        onClick={() => handleUpdateAnswerOption()} 
                                        disabled={isInvalid()}
                                    >
                                        <Edit />
                                    </IconButton>
                                )
                            }

                            <IconButton 
                                aria-label="clear-answer"
                                size="small" 
                                onClick={() => handleClearAnswerOption()} 
                            >
                                <Clear />
                            </IconButton>

                        </aside>
                        
                    </SAnswerOptionInput>

                    <SAnswerOptionItems hidden={fields.length === 0}>    
                        {
                            fields.map((x, index) => (
                                <SAnswerOptionItem key={x.id} onDoubleClick={() => onUpdateAnswerOption(x)}>
                                    <IconButton 
                                        aria-label="remove-answer"
                                        size="small" 
                                        onClick={() => handleRemoveAnswerOption(index)} 
                                    >
                                        <Remove style={{ fontSize: 14 }}/>
                                    </IconButton>
                                    {x.isCorrect ? (
                                        <LAnswerOptionItem type={OptionType.Correct} label={x.description} />
                                    ) : (
                                        <LAnswerOptionItem type={OptionType.Selected} label={x.description} />
                                    )}
                                </SAnswerOptionItem>
                            ))
                        }
                    </SAnswerOptionItems>        
                </SAnswerOptionContainer>

            </SQuestionCardData>
        </SQuestionCardContainer>
    )
}

