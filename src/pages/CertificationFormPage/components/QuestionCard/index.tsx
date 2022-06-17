import { Add, Clear, Edit, Remove } from "@mui/icons-material";
import { FormControlLabel, IconButton, Switch } from "@mui/material";
import { useState } from "react";
import { Control, Controller, useFieldArray } from "react-hook-form";

import { SAnswerOptionContainer, SAnswerOptionInput, SAnswerOptionItem, SAnswerOptionItems, SQuestionCardContainer, SQuestionInputs } from "./styles";

import { AnswerOption, Certification } from "@pages/CertificationFormPage/domain/certification.model";
import { LAnswerOptionItem } from "@components/LAnswerOptionItem";
import { OptionType } from "@components/LAnswerOptionItem/models";
import { LInput } from "@components/LInput";

interface Props {
    moduleIndex: number;
    questionIndex: number;
    control: Control<Certification, any>,
}

export function QuestionCard({
    moduleIndex,
    questionIndex,
    control,
}: Props){

    const [newOption, setNewOption] = useState<AnswerOption>(new AnswerOption());
    const [isNew, setIsNew] = useState<boolean>(true);

    const { fields, remove, append, replace, update } = useFieldArray({
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

    return (
        <SQuestionCardContainer>

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
                        label="ANSWER.IS_CORRECT" 
                    />

                    {
                        isNew ? (
                            <IconButton 
                                aria-label="add-module"
                                size="small" 
                                onClick={() => handleAddAnswerOption()} 
                                disabled={isInvalid()}
                            >
                                <Add />
                            </IconButton>
                        ) : (
                            <IconButton 
                                aria-label="update-module"
                                size="small" 
                                onClick={() => handleUpdateAnswerOption()} 
                                disabled={isInvalid()}
                            >
                                <Edit />
                            </IconButton>
                        )
                    }

                    <IconButton 
                        aria-label="clear-module"
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
        </SQuestionCardContainer>
    )
}

