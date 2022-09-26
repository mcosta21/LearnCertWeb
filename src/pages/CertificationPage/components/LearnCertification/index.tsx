import { Certification } from "@pages/CertificationFormPage/domain/certification.model";
import { CertificationHelper } from "@pages/CertificationPage/services/certification.helper";
import { useState } from "react";
import HeaderCertification from "../HeaderCertification";
import PanelCertification from "../PanelCertification";

interface Props {
    certification: Certification;
    onStartQuiz: () => void;
}

export default function LearnCertification({
    certification,
    onStartQuiz
}: Props) {

    const [questions, setQuestions] = useState(CertificationHelper.questions(certification));
    const [showAllAnswer, setShowAllAnswer] = useState<boolean>(false);
    
    function handleShowAllAnswer(){
        setShowAllAnswer(oldState => !oldState);
    }

    return (
        <>
           <HeaderCertification 
                certification={certification} 
                showAllAnswer={showAllAnswer}
                onShowAllAnswer={handleShowAllAnswer}
                onStartQuiz={onStartQuiz}
            />

            <PanelCertification 
                questions={questions} 
                setQuestions={setQuestions}
                showAllAnswer={showAllAnswer}
            />
        </>
        
    )
}