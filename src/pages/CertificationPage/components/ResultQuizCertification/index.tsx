import LButtonOutlined from "@components/LButtonOutlined";
import { Certification } from "@pages/CertificationFormPage/domain/certification.model"
import { QuestionModelCard } from "@pages/CertificationPage/domain/models/certification.model";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LoaderTime from "../LoaderTime";
import PanelCertification from "../PanelCertification";
import { SContainer, SFooter, SHeader, SResultSubTitle, SResultTitle } from "./styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReplayIcon from '@mui/icons-material/Replay';

interface Props {
    certification: Certification,
    questions: QuestionModelCard[],
    onClose: () => void;
    onTryAgain: () => void;
}

const SECONDS_TIME = 0;

export default function ResultQuizCertification({
    certification,
    questions,
    onClose,
    onTryAgain
}: Props){

    const { t } = useTranslation();
    const [loadingTime, setLoadingTime] = useState<number>(SECONDS_TIME);

    useEffect(() => {
        if(loadingTime === 0) return;
        setTimeout(() => {
            setLoadingTime(old => old - 1);
        }, 700)
    }, [loadingTime]);
    
    if(loadingTime) {
        return (
            <LoaderTime 
                message="CERTIFICATION.WE_ARE_CALCULATING_YOUR_PROGRESS" 
                timer={loadingTime} 
            />
        )
    }

    const quantityQuestions = questions.length;
    const quantityCorrectAnswerQuestions = questions.filter(x => !!x.answerSelected && x.answerSelected.isCorrect === true).length;

    const percentageApprovation = Number(((quantityCorrectAnswerQuestions / quantityQuestions) * 100).toFixed(0));

    const isApproved = percentageApprovation > 70;

    return (
        <SContainer>
            <SHeader>
                <img src={certification.imageUrl} />
            </SHeader>

            <SResultTitle>
                {t(isApproved ? 'CONGRATULATIONS' : 'CERTIFICATION.SORRY_BUT_YOU_DIDNT_MAKE_IT_THIS_TIME')}
            </SResultTitle>

            <SResultSubTitle>
                {t('CERTIFICATION.RESULT_QUIZ_DESCRIPTION', { percentage: percentageApprovation, quantity: quantityCorrectAnswerQuestions })}
            </SResultSubTitle>

            <SFooter>
                <LButtonOutlined 
                    icon={<ReplayIcon />}
                    text="TRY_AGAIN" 
                    onClick={onTryAgain} 
                />
                <LButtonOutlined 
                    icon={<ArrowBackIcon />}
                    text="BACK" 
                    onClick={onClose}
                />
            </SFooter>

            <PanelCertification 
                questions={questions} 
                showAllAnswer
                showAnswerHidden
                showAllFocused
            />
        </SContainer>
    )
}