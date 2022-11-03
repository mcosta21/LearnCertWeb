import { Certification } from "@pages/CertificationFormPage/domain/certification.model"
import { CertificationHelper } from "@pages/CertificationPage/services/certification.helper"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeaderCertification from "../HeaderCertification"
import PanelCertification from "../PanelCertification"
import ResultQuizCertification from "../ResultQuizCertification";
import LoaderTime from "../LoaderTime";
import { QuestionModelCard } from "@pages/CertificationPage/domain/models/certification.model";

interface Props {
    certification: Certification;
    onFinishQuiz: (questions: QuestionModelCard[]) => void;
    onCancelQuiz: () => void;
    onCloseQuiz: () => void;
}

const SECONDS_TIME = 0;

export default function QuizCertification({
    certification,
    onFinishQuiz,
    onCancelQuiz,
    onCloseQuiz
}: Props) {

    const { t } = useTranslation();

    const [startedTime, setStartedTime] = useState<number>(SECONDS_TIME);
    const [isFinished, setIsFinished] = useState(false);
    const [questions, setQuestions] = useState(CertificationHelper.sortableQuestions(certification));

    const countAnsweredQuestions = questions.filter(x => !!x.answerSelected).length;
    const countQuestions = questions.length;

    useEffect(() => {
        if(startedTime === 0) return;
        setTimeout(() => {
            setStartedTime(old => old - 1);
        }, 700)
    }, [startedTime]);

    const started = !(startedTime > 0);

    function handleFinish(){
        setIsFinished(true);
        onFinishQuiz(questions);
    }

    function handleClose(){
        onCloseQuiz();
    }

    function handleTryAgain(){
        setStartedTime(SECONDS_TIME);
        setIsFinished(false);
        setQuestions(CertificationHelper.sortableQuestions(certification));
    }

    if(isFinished) {
        return <ResultQuizCertification 
                    certification={certification} 
                    questions={questions} 
                    onClose={handleClose}
                    onTryAgain={handleTryAgain}
               />
    }

    return (
        <>
            {
                !started && (
                    <LoaderTime 
                        message="CERTIFICATION.YOUR_QUIZ_WILL_START_IN_A_MOMENT" 
                        timer={startedTime} 
                    />
                )
            }

            <div style={{ visibility: started ? 'visible' : 'hidden'}}>
                <HeaderCertification 
                    certification={certification} 
                    showAllAnswer={false}
                    onFinishQuizDisabled={countAnsweredQuestions < countQuestions}
                    onFinishQuiz={handleFinish}
                    onCancelQuiz={onCancelQuiz}
                >
                    <p>{certification.title}</p>
                    <h1>{`${t('RESULT')}: ${countAnsweredQuestions} / ${countQuestions}`}</h1>
                </HeaderCertification>
            </div>

            {
                started && (
                    <PanelCertification 
                        questions={questions} 
                        setQuestions={setQuestions}
                        showAllAnswer={false}
                        learnMoreHidden
                        showAnswerHidden
                        useIndexCode
                    />
                )
            }
        </>
    )
}