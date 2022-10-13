import { AnswerOption, Question, QuestionModelCard } from "@pages/CertificationFormPage/domain/certification.model";
import { Dispatch, SetStateAction, useState } from "react";
import QuestionCard from "../QuestionCard";
import { SPanelContainer } from "./styles";

interface Props {
    questions: QuestionModelCard[],
    setQuestions?: Dispatch<SetStateAction<QuestionModelCard[]>>;
    showAllAnswer?: boolean;
    learnMoreHidden?: boolean;
    showAnswerHidden?: boolean;
    showAllFocused?: boolean;
    useIndexCode?: boolean;
}

export default function PanelCertification({
    questions = [],
    setQuestions,
    showAllAnswer = false,
    learnMoreHidden = false,
    showAnswerHidden = false,
    showAllFocused = false,
    useIndexCode = false
}: Props){

    function handleSelectAnswer(question: Question, answer: AnswerOption){
        if(!setQuestions) return;
        
        setQuestions(data => data.map(x => {
            if(question.id === x.id) {
                x.answerSelected = answer;
            }
            return x;
        }))
    }

    return (
        <SPanelContainer>
            {
                questions.map(question => (
                    <QuestionCard 
                        key={question.id} 
                        question={question}
                        showCorrectAnswer={showAllAnswer}
                        learnMoreHidden={learnMoreHidden}
                        showAnswerHidden={showAnswerHidden}
                        onSelectAnswer={handleSelectAnswer}
                        focused={showAllFocused}
                        useIndexCode={useIndexCode}
                    />
                ))
                
            }
        </SPanelContainer>
    )
}
