import { useEffect, useState } from "react";
import LBody from "@components/LBody";
import { useParams } from "react-router-dom";
import HeaderCertification from "./components/HeaderCertification";
import PanelCertification from "./components/PanelCertification";
import * as api from '../CertificationFormPage/services/certification.api';
import { Certification, QuestionModelCard } from "@pages/CertificationFormPage/domain/certification.model";
import _ from "lodash";
import { CertificationHelper } from "./services/certification.helper";
import QuizCertification from "./components/QuizCertification";
import LearnCertification from "./components/LearnCertification";

export default function CertificationLearnPage(){

    const { id } = useParams();
    const [certification, setCertification] = useState<Certification>(new Certification());
    const [loading, setLoading] = useState<boolean>(true);
    const [isQuizMode, setQuizMode] = useState(false);
    
    useEffect(() => {
        if(id) {
            api.getById(id)
                .then(data => {
                    setCertification(data);
                    setLoading(false);
                })
                .catch(error => {
                    alert(error.message);
                });
        }
        else {
            setLoading(false);
        }
    }, []);
    
    function handleStartQuiz(){
        setQuizMode(true);
    }

    function handleFinishQuiz(questions: QuestionModelCard[]){
        console.log('save', questions)
    }

    function handleCloseQuiz(){
        setQuizMode(false);
    }

    return (
        <LBody hideHeader loading={!certification.id || loading}>
            {
                !isQuizMode ? (
                    <LearnCertification
                        certification={certification}
                        onStartQuiz={handleStartQuiz}
                    />
                ) : (
                    <QuizCertification 
                        certification={certification} 
                        onFinishQuiz={handleFinishQuiz}
                        onCancelQuiz={handleCloseQuiz}
                        onCloseQuiz={handleCloseQuiz}
                    />
                )
            }
        </LBody>
    )
}