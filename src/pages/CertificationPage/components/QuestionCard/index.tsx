import { Question, QuestionModelCard } from "@pages/CertificationFormPage/domain/certification.model";
import { AnswerOption } from "@pages/CertificationPage/domain/models/certification.model";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AnswerOptionList from "./AnswerOptionList";
import QuestionModuleTitle from "./QuestionModuleTitle";
import { SCardContainer, SQuestionDescription, SQuestionFooter } from "./styles";

interface Props {
    question: QuestionModelCard;
    showCorrectAnswer?: boolean;
    onSelectAnswer: (question: Question, answer: AnswerOption) => void;
    learnMoreHidden?: boolean;
    showAnswerHidden?: boolean;
    focused?: boolean;
    useIndexCode?: boolean;
}

export default function QuestionCard({
    question,
    showCorrectAnswer = false,
    onSelectAnswer,
    learnMoreHidden = false,
    showAnswerHidden = false,
    focused = false,
    useIndexCode = false
}: Props){

    const { t } = useTranslation();

    const [showCorrect, setShowCorrect] = useState<boolean>(showCorrectAnswer);
    const [showAllCorrect, setShowAllCorrect] = useState<boolean>(showCorrectAnswer);
    
    const [_focused, setFocused] = useState(focused);
    
    function handleFocus() {
        const element = document.getElementById(question.id);
        if(element) {
            setTimeout(() => element?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
        }
        if(_focused) return;

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
        <SCardContainer id={question.id} onClick={handleFocus} className={_focused ? 'focused' : 'collapsed'}>

            <QuestionModuleTitle 
                question={question}
                focused={_focused}
                handleCollapse={handleCollapse}
                answered={!!question.answerSelected}
                useIndexCode={useIndexCode}
            />

            <SQuestionDescription dangerouslySetInnerHTML={{ __html: question.description }} />
            
            {
                _focused && (
                    <>
                        <AnswerOptionList 
                            answers={question.answerOptions} 
                            showCorrect={showCorrect || showAllCorrect} 
                            selectedOptionCode={question.answerSelected?.code}
                            onSelectAnswer={handleSelectAnswer}
                        />
                        {
                            ((learnMoreHidden === false && !!question.learnMore) || showAnswerHidden === false) && (
                                <SQuestionFooter>
                                    {
                                        (learnMoreHidden === false && !!question.learnMore) ? (
                                            <a 
                                                href={question.learnMore} 
                                                rel="noreferrer noopener"
                                                target="_blank"
                                                className={!!question.learnMore ? 'visible' : 'hidden'}
                                            >
                                                {t('QUESTION.LEARN_MORE')}
                                            </a>
                                        ) : (<span/>)
                                    }
                                    
                                    {
                                        showAnswerHidden === false && (
                                            <button onClick={handleShowCorrectAnswer}>
                                                {(showCorrect || showAllCorrect) ? t('ANSWER.HIDE_ANSWER') : t('ANSWER.SHOW_ANSWER')}
                                            </button>
                                        )
                                    }
                                    
                                </SQuestionFooter>
                            )
                        }
                    </>
                )
            }
            
        </SCardContainer>
    )
}
