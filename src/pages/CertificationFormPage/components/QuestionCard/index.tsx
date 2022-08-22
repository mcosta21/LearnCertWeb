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

import Translate from '@services/i18nProvider/Translate';

interface Props {
    moduleIndex: number;
    questionIndex: number;
    control: Control<Certification, any>,
    onRemoveQuestion: (index: number) => void;
    collapsed?: boolean;
}

export function QuestionCard({
    moduleIndex,
    questionIndex,
    control,
    onRemoveQuestion,
    collapsed = true
}: Props){

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
        setCollapsed(oldState => !oldState);
    }

    return (
        <SQuestionCardContainer>
            
            <SQuestionCardCollapsed hidden={!isCollapsed}>
                <div>
                    <Controller
                        control={control}
                        defaultValue=""
                        name={`modules.${moduleIndex}.questions.${questionIndex}.description`}
                        render={({ field }) =>
                            (
                                <>
                                    <LLabel value={field.value} />
                                </>
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
                    <Controller
                        control={control}
                        defaultValue=""
                        name={`modules.${moduleIndex}.questions.${questionIndex}.description`}
                        render={({ field, fieldState }) =>
                            (
                                <LInput 
                                    label="QUESTION.DESCRIPTION"
                                    required
                                    error={fieldState.error?.message}
                                    {...field} 
                                />
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

                    <IconButton 
                        aria-label="remove-question"
                        size="small" 
                        onClick={() => onRemoveQuestion(questionIndex)} 
                    >
                        <Delete />
                    </IconButton>

                    <Controller
                        control={control}
                        defaultValue=""
                        name={`modules.${moduleIndex}.questions.${questionIndex}.learnMore`}
                        render={({ field }) =>
                            (
                                <IconButton 
                                    aria-label="collapse-question"
                                    size="small" 
                                    onClick={handleCollapse} 
                                >
                                    <KeyboardArrowUp />
                                </IconButton>
                            )
                        }
                    /> 
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

