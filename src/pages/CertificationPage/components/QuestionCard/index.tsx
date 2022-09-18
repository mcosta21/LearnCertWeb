import { Module, Question } from "@pages/CertificationFormPage/domain/certification.model";
import { AnswerOption, QuestionDescriptionModel } from "@pages/CertificationPage/models/certification.model";
import { useEffect, useState } from "react";
import AnswerOptionList from "./AnswerOptionList";
import QuestionModuleTitle from "./QuestionModuleTitle";
import { SCardContainer, SQuestionDescription, SQuestionFooter } from "./styles";

interface Props {
    question: Question;
    module: Module;
    showCorrectAnswer?: boolean;
}

export default function QuestionCard({
    question,
    module,
    showCorrectAnswer = false
}: Props){

    const [showCorrect, setShowCorrect] = useState<boolean>(showCorrectAnswer);
    
    const [selectedOptionCode, setSelectedOptionCode] = useState<number>();
    const [focused, setFocused] = useState(false);
    
    function handleFocus() {
        if(focused) return;
        setFocused(true);
    }

    function handleCollapse() {
        setFocused(false);
    }

    function handleShowCorrectAnswer() {
        setShowCorrect(oldState => !oldState);
    }
    
    function handleSelectOption(option: AnswerOption) {
        setSelectedOptionCode(option.code);
    }

    useEffect(() => {
        setShowCorrect(showCorrectAnswer);
    }, [showCorrectAnswer])

    return (
        <SCardContainer onClick={handleFocus} className={focused ? 'focused' : 'collapsed'}>
            <QuestionModuleTitle 
                module={module}
                question={question}
                focused={focused}
                handleCollapse={handleCollapse}
            />

            <SQuestionDescription>
                {question.description}
            </SQuestionDescription>

            {
                focused && (
                    <>
                        <AnswerOptionList 
                            answers={question.answerOptions} 
                            showCorrect={showCorrect} 
                            selectedOptionCode={selectedOptionCode}
                            onSelectOption={handleSelectOption}
                        />
                        <SQuestionFooter>
                            <a 
                                href={question.learnMore} 
                                rel="noreferrer noopener"
                                target="_blank"
                                className={!!question.learnMore ? 'visible' : 'hidden'}
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
