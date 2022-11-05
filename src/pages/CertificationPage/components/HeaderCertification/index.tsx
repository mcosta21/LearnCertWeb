import LButtonOutlined from "@components/LButtonOutlined";
import LIconButton from "@components/LIconButton";
import LLogo from "@components/LLogo";
import { FirstPage, Visibility, VisibilityOff } from "@mui/icons-material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

import { Certification } from "@pages/CertificationFormPage/domain/certification.model";
import { RouterKey } from "@routes/routekeys";
import { useNavigate } from 'react-router-dom';
import { SButtonOptionContainer, SHeaderContainer } from "./styles";

interface Props {
    certification: Certification;
    children: any;
    showAllAnswer: boolean;
    onShowAllAnswer?: () => void;
    onStartQuiz?: () => void;
    onFinishQuiz?: () => void;
    onCancelQuiz?: () => void;
    onFinishQuizDisabled?: boolean;
}

export default function HeaderCertification({
    certification,
    children,
    showAllAnswer = false,
    onShowAllAnswer,
    onStartQuiz,
    onFinishQuiz,
    onCancelQuiz,
    onFinishQuizDisabled = true
}: Props){

    const navigate = useNavigate();

    function goBack(){
        navigate(RouterKey.CertificationList);
    }

    return (
        <SHeaderContainer>
            <aside>
                {
                    certification.imageUrl ? (
                        <img className="certification-image" src={certification.imageUrl} />
                    ) : (
                        <LLogo type="icon" />
                    )
                }

                <div>
                    {children}
                </div>
            </aside>

            <SButtonOptionContainer>
 
                <LButtonOutlined 
                    icon={<PlayArrowIcon />}
                    hidden={!onStartQuiz} 
                    text="CERTIFICATION.START_QUIZ" 
                    onClick={onStartQuiz}
                />

                <LButtonOutlined 
                    icon={<DoneIcon />}
                    hidden={!onFinishQuiz} 
                    disabled={onFinishQuizDisabled} 
                    text="FINISH" 
                    onClick={onFinishQuiz}
                />

                <LButtonOutlined 
                    icon={<CloseIcon />}
                    hidden={!onCancelQuiz} 
                    text="CANCEL" 
                    onClick={onCancelQuiz}
                />

                {
                    !!onShowAllAnswer && (
                        <LIconButton 
                            arialLabel="visibility"
                            onClick={onShowAllAnswer} 
                            icon={showAllAnswer ? <VisibilityOff /> : <Visibility />}
                            tooltip={showAllAnswer ? 'HIDE_ANSWERS' : 'SHOW_ANSWERS' }
                        />
                    )
                }

                <LIconButton 
                    arialLabel="go-back"
                    onClick={goBack} 
                    icon={<FirstPage />}
                    tooltip="BACK"
                />

            </SButtonOptionContainer>

            
        </SHeaderContainer>
    )
}