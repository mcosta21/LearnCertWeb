import { AnswerOption, Question, QuestionModelCard } from "@pages/CertificationFormPage/domain/certification.model";
import { Dispatch, SetStateAction, useState } from "react";
import QuestionCard from "../QuestionCard";
import { SPanelContainer } from "./styles";

interface Props {
    questions: QuestionModelCard[],
    setQuestions: Dispatch<SetStateAction<QuestionModelCard[]>>;
    showAllAnswer?: boolean;
    optionsDisabled?: boolean;
}

export default function PanelCertification({
    questions = [],
    setQuestions,
    showAllAnswer = false,
    optionsDisabled = false
}: Props){

    function handleSelectAnswer(question: Question, answer: AnswerOption){
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
                        optionsDisabled={optionsDisabled}
                        onSelectAnswer={handleSelectAnswer}
                    />
                ))
                
            }
        </SPanelContainer>
    )
}
