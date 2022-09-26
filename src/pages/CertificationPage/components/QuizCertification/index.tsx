import { Certification, QuestionModelCard } from "@pages/CertificationFormPage/domain/certification.model"
import { CertificationHelper } from "@pages/CertificationPage/services/certification.helper"
import { useState } from "react";
import HeaderCertification from "../HeaderCertification"
import PanelCertification from "../PanelCertification"

interface Props {
    certification: Certification;
    onFinishQuiz: (questions: QuestionModelCard[]) => void;
    onCancelQuiz: () => void;
}

export default function QuizCertification({
    certification,
    onFinishQuiz,
    onCancelQuiz
}: Props) {

    const [questions, setQuestions] = useState(CertificationHelper.sortableQuestions(certification));

    return (
        <>
            <HeaderCertification 
                certification={certification} 
                showAllAnswer={false}
                onFinishQuiz={() => onFinishQuiz(questions)}
                onCancelQuiz={onCancelQuiz}
            />

            <PanelCertification 
                questions={questions} 
                setQuestions={setQuestions}
                showAllAnswer={false}
                optionsDisabled
            />
        </>
        
    )
}