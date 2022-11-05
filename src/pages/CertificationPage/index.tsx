import LBody from "@components/LBody";
import { Fab } from "@mui/material";
import { Certification} from "@pages/CertificationFormPage/domain/certification.model";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as certificationApi from '../CertificationFormPage/services/certification.api';
import LearnCertification from "./components/LearnCertification";
import QuizCertification from "./components/QuizCertification";
import { QuestionModelCard } from "./domain/models/certification.model";
import * as quizApi from './services/quiz.api';
import NavigationIcon from '@mui/icons-material/Navigation';
import { SNavigateTopFab } from "./styles";

export default function CertificationLearnPage(){

    const { id } = useParams();
    const [certification, setCertification] = useState<Certification>(new Certification());
    const [loading, setLoading] = useState<boolean>(true);
    const [isQuizMode, setQuizMode] = useState(false);
    const [showNavigateTopButton, setShowNavigateTopButton] = useState(false);
    
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

        addScrollListenet();

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

    function addScrollListenet(){
        const element = document.getElementById('body-content');

        if(!element) {
            return;
        }

        element.addEventListener('scroll', () => {
            if(element.scrollTop > 30) {
                setShowNavigateTopButton(true);
            }
            else {
                setShowNavigateTopButton(false);
            }

        }, { passive: true });
    
        return () => {
            element.removeEventListener('scroll', () => {
                setShowNavigateTopButton(false);
            });
        };
    }

    function handleNavigateTop(){
        const element = document.getElementById('body-content');
        if(element) {
            setTimeout(() => element?.scrollTo({ behavior: 'smooth', top: 0 }))
        }
    }

    return (
        <LBody loading={!certification.id || loading}>
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
            {
                showNavigateTopButton && (
                    <SNavigateTopFab onClick={handleNavigateTop}>
                        <NavigationIcon />
                    </SNavigateTopFab>
                )
            }
            
        </LBody>
    )
}