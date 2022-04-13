import { QuestionResult } from "pages/CertificationPage/models/certification.model"
import { useState } from "react";
import AnswerOptionList from "./AnswerOptionList";
import QuestionModuleTitle from "./QuestionModuleTitle";
import { SCardContainer, SQuestionDescription, SQuestionFooter } from "./styles";

interface Props {
    value: QuestionResult;
}

export default function QuestionCard({
    value
}: Props){

    const [focused, setFocused] = useState(false);
    const [showCorrect, setShowCorrect] = useState(false);
    
    function handleFocus() {
        if(focused === true) return;
        setFocused(true);
    }

    function handleCollapse() {
        setFocused(false);
    }

    function handleShowCorrect(){
        setShowCorrect(oldState => !oldState);
    }

    return (
        <SCardContainer onClick={handleFocus}>
            <QuestionModuleTitle 
                title={value.moduleTitle} 
                focused={focused}
                handleCollapse={handleCollapse}
            />

            <SQuestionDescription>
                {value.questionDescription}
            </SQuestionDescription>

            {
                focused && (
                    <>
                        <AnswerOptionList answers={value.answerOptions} showCorrect={showCorrect} />
                        <SQuestionFooter>
                            <button onClick={handleShowCorrect}>
                                {showCorrect ? 'Hide answer' : 'Show answer'}
                            </button>
                        </SQuestionFooter>
                    </>
                )
            }
            
        </SCardContainer>
    )
}
