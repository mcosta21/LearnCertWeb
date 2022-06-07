import { LInput } from "../../../../components/LInput";
import { AnswerOption, Certification } from "../../../../pages/CertificationFormPage/models/certification.model";
import { Control, Controller, useFieldArray } from "react-hook-form";
import { SAnswerOptionContainer, SAnswerOptionInput, SAnswerOptionItem, SAnswerOptionItems, SQuestionCardContainer } from "./styles";
import { useState } from "react";
import { FormControlLabel, IconButton, Switch } from "@mui/material";
import { Add, Check } from "@mui/icons-material";
import { LAnswerOptionItem } from "../../../../components/LAnswerOptionItem";
import { OptionType } from "../../../../components/LAnswerOptionItem/models";

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

    const { fields, remove, append } = useFieldArray({
        control,
        name: `modules.${moduleIndex}.questions.${questionIndex}.answerOptions`
    });
    
    function handleAddAnswerOption(){
        console.log(newOption)
        append(newOption);
        setNewOption(new AnswerOption());
    }

    function setDescription(value: string) {
        setNewOption(oldState => { 
            return {...oldState, description: value }
        });
    }

    function toogleIsCorrect() {
        setNewOption(oldState => { 
            return {...oldState, isCorrect: !oldState.isCorrect }
        });
    }

    function isInvalid(){
        return !newOption || !newOption.description;
    }

    return (
        <SQuestionCardContainer>
            <Controller
                control={control}
                name={`modules.${moduleIndex}.questions.${questionIndex}.description`}
                render={({ field }) =>
                    (
                        <LInput 
                            label="QUESTION.DESCRIPTION"
                            hideError
                            {...field} 
                        />
                    )
                }
            />

            <SAnswerOptionContainer>
                <SAnswerOptionInput>
                    <LInput 
                        label="ANSWER.DESCRIPTION"
                        value={newOption.description}
                        hideError
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <FormControlLabel 
                        className="answer-is-correct"
                        labelPlacement="top"
                        control={
                            <Switch 
                                checked={newOption.isCorrect} 
                                onChange={toogleIsCorrect}
                            />
                        } 
                        label="ANSWER.IS_CORRECT" 
                    />

                    <IconButton 
                        aria-label="add-module"
                        size="small" 
                        onClick={() => handleAddAnswerOption()} 
                        disabled={isInvalid()}
                    >
                        <Add />
                    </IconButton>

                </SAnswerOptionInput>

                <SAnswerOptionItems hidden={fields.length === 0}>    
                    {
                        fields.map(x => (
                            <SAnswerOptionItem key={x.id}>
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