import { AnswerOption, QuestionDescriptionModel, QuestionResult } from "pages/CertificationPage/models/certification.model"
import { useState } from "react";
import AnswerOptionList from "./AnswerOptionList";
import QuestionModuleTitle from "./QuestionModuleTitle";
import { SCardContainer, SQuestionDescription, SQuestionFooter } from "./styles";

interface Props {
    value: QuestionDescriptionModel;
    focused: boolean;
    showCorrect: boolean;
    onFocus: (questionId: string | undefined) => void;
    onShowCorrect: (questionId: string | undefined) => void;
    selectedOptionCode: number | undefined;
    onSelectOption: (option: AnswerOption) => void;
}

export default function QuestionCard({
    value,
    focused,
    onFocus,
    showCorrect,
    onShowCorrect,
    selectedOptionCode,
    onSelectOption
}: Props){

    
    function handleFocus() {
        if(focused) return;
        onFocus(value.questionId);
    }

    function handleCollapse() {
        onFocus(undefined);
    }

    function handleShowCorrectAnswer() {
        onShowCorrect(showCorrect ? undefined : value.questionId);
    }


    return (
        <SCardContainer onClick={handleFocus} className={focused ? 'focused' : 'collapsed'}>
            <QuestionModuleTitle 
                question={value!}
                focused={focused}
                handleCollapse={handleCollapse}
            />

            <SQuestionDescription>
                {value.description}
            </SQuestionDescription>

            {
                focused && (
                    <>
                        <AnswerOptionList 
                            answers={value.answerOptions} 
                            showCorrect={showCorrect} 
                            selectedOptionCode={selectedOptionCode}
                            onSelectOption={onSelectOption}
                        />
                        <SQuestionFooter>
                            <a 
                                href={value.description} 
                                rel="noreferrer noopener"
                                target="_blank"
                                className={!!value.description ? 'visible' : 'hidden'}
                            >
                                Learn more
                            </a>
                            <button onClick={handleShowCorrectAnswer}>
                                {showCorrect ? 'Hide answer' : 'Show answer'}
                            </button>
                        </SQuestionFooter>
                    </>
                )
            }
            
        </SCardContainer>
    )
}
