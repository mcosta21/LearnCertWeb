import { Chip } from "@mui/material";
import { Module, Question, QuestionModelCard } from "@pages/CertificationFormPage/domain/certification.model";
import { AnswerOption, QuestionDescriptionModel } from "@pages/CertificationPage/models/certification.model";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AnswerOptionList from "./AnswerOptionList";
import QuestionModuleTitle from "./QuestionModuleTitle";
import { SCardContainer, SQuestionDescription, SQuestionFooter } from "./styles";

interface Props {
    question: QuestionModelCard;
    showCorrectAnswer?: boolean;
    optionsDisabled?: boolean;
    onSelectAnswer: (question: Question, answer: AnswerOption) => void;
}

export default function QuestionCard({
    question,
    showCorrectAnswer = false,
    optionsDisabled = false,
    onSelectAnswer
}: Props){

    const { t } = useTranslation();

    const [showCorrect, setShowCorrect] = useState<boolean>(showCorrectAnswer);
    const [showAllCorrect, setShowAllCorrect] = useState<boolean>(showCorrectAnswer);
    
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

    function handleSelectAnswer(answer: AnswerOption) {
        onSelectAnswer(question, answer)
    }

    useEffect(() => {
        setShowAllCorrect(showCorrectAnswer);
    }, [showCorrectAnswer])

    return (
        <SCardContainer id={question.id} onClick={handleFocus} className={focused ? 'focused' : 'collapsed'}>

            <QuestionModuleTitle 
                question={question}
                focused={focused}
                handleCollapse={handleCollapse}
                answered={!!question.answerSelected}
            />

            <SQuestionDescription dangerouslySetInnerHTML={{ __html: question.description }} />
            
            {
                focused && (
                    <>
                        <AnswerOptionList 
                            answers={question.answerOptions} 
                            showCorrect={showCorrect || showAllCorrect} 
                            selectedOptionCode={question.answerSelected?.code}
                            onSelectAnswer={handleSelectAnswer}
                        />
                        {
                            !optionsDisabled && (
                                <SQuestionFooter>
                                    <a 
                                        href={question.learnMore} 
                                        rel="noreferrer noopener"
                                        target="_blank"
                                        className={!!question.learnMore ? 'visible' : 'hidden'}
                                    >
                                        {t('QUESTION.LEARN_MORE')}
                                    </a>
                                    <button onClick={handleShowCorrectAnswer}>
                                        {(showCorrect || showAllCorrect) ? t('ANSWER.HIDE_ANSWER') : t('ANSWER.SHOW_ANSWER')}
                                    </button>
                                </SQuestionFooter>
                            )
                        }
                        
                    </>
                )
            }
            
        </SCardContainer>
    )
}
