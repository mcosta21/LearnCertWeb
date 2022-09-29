import LBody from "@components/LBody";
import { Certification, QuestionModelCard } from "@pages/CertificationFormPage/domain/certification.model";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as certificationApi from '../CertificationFormPage/services/certification.api';
import LearnCertification from "./components/LearnCertification";
import QuizCertification from "./components/QuizCertification";
import * as quizApi from './services/quiz.api';

export default function CertificationLearnPage(){

    const { id } = useParams();
    const [certification, setCertification] = useState<Certification>(new Certification());
    const [loading, setLoading] = useState<boolean>(true);
    const [isQuizMode, setQuizMode] = useState(false);
    
    useEffect(() => {
        if(id) {
            certificationApi.getById(id)
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
        quizApi.register(certification, questions);
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