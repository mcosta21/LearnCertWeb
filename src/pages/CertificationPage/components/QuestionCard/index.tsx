import { Chip } from "@mui/material";
import { Module, Question } from "@pages/CertificationFormPage/domain/certification.model";
import { AnswerOption, QuestionDescriptionModel } from "@pages/CertificationPage/models/certification.model";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

    const { t } = useTranslation();

    const [showCorrect, setShowCorrect] = useState<boolean>(showCorrectAnswer);
    const [showAllCorrect, setShowAllCorrect] = useState<boolean>(showCorrectAnswer);
    
    const [selectedOptionCode, setSelectedOptionCode] = useState<number>();
    const [focused, setFocused] = useState(false);
    
    function handleFocus() {
        const element = document.getElementById(question.id);
        if(element) {
            setTimeout(() => element?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
        }
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
        setShowAllCorrect(showCorrectAnswer);
    }, [showCorrectAnswer])

    return (
        <SCardContainer id={question.id} onClick={handleFocus} className={focused ? 'focused' : 'collapsed'}>

            <QuestionModuleTitle 
                module={module}
                question={question}
                focused={focused}
                handleCollapse={handleCollapse}
                answered={!!selectedOptionCode}
            />

            <SQuestionDescription dangerouslySetInnerHTML={{ __html: question.description }} />
            
            {
                focused && (
                    <>
                        <AnswerOptionList 
                            answers={question.answerOptions} 
                            showCorrect={showCorrect || showAllCorrect} 
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
                                {(showCorrect || showAllCorrect) ? 'Hide answer' : 'Show answer'}
                            </button>
                        </SQuestionFooter>
                    </>
                )
            }
            
        </SCardContainer>
    )
}
