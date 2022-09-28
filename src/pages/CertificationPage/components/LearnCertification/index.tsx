import { Certification } from "@pages/CertificationFormPage/domain/certification.model";
import { CertificationHelper } from "@pages/CertificationPage/services/certification.helper";
import { useState } from "react";
import { useTranslation } from "react-i18next";
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
    const { t } = useTranslation();
    
    function handleShowAllAnswer(){
        setShowAllAnswer(oldState => !oldState);
    }

    const description = `${questions.length} ${t('QUESTION.LABEL')} / ${t('CERTIFICATION.LANGUAGE_TYPE')}: ${t(certification.languageType)}`;

    return (
        <>
           <HeaderCertification 
                certification={certification} 
                showAllAnswer={showAllAnswer}
                onShowAllAnswer={handleShowAllAnswer}
                onStartQuiz={onStartQuiz}
            >
                <h1>{certification.title}</h1>
                <p>{description}</p>
            </HeaderCertification>

            <PanelCertification 
                questions={questions} 
                setQuestions={setQuestions}
                showAllAnswer={showAllAnswer}
            />
        </>
        
    )
}