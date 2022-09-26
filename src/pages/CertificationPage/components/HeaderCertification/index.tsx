import LButtonOutlined from "@components/LButtonOutlined";
import LIconButton from "@components/LIconButton";
import { useMyTheme } from "@hooks/useMyTheme";
import { DarkMode, FirstPage, LightMode, TranslateOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { Certification } from "@pages/CertificationFormPage/domain/certification.model";
import { RouterKey } from "@routes/routekeys";
import Translate from "@services/i18nProvider/Translate";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { SButtonOptionContainer, SHeaderContainer } from "./styles";

interface Props {
    certification: Certification;
    showAllAnswer: boolean;
    onShowAllAnswer?: () => void;
    onStartQuiz?: () => void;
    onFinishQuiz?: () => void;
    onCancelQuiz?: () => void;
}

export default function HeaderCertification({
    certification,
    showAllAnswer = false,
    onShowAllAnswer,
    onStartQuiz,
    onFinishQuiz,
    onCancelQuiz
}: Props){

    const navigate = useNavigate();
    const { themeName, toggleTheme } = useMyTheme();
    const { i18n, t } = useTranslation();

    function changeLanguage(language: string){
        i18n.changeLanguage(language)
    }
    
    function countQuestions(){
        return certification.modules.map(x => x.questions.length) + ' ';
    }

    function goBack(){
        navigate(RouterKey.CertificationList);
    }

    return (
        <SHeaderContainer>
            <aside>
                <img src={certification.imageUrl} />

                <div>
                    <h1>{certification.title}</h1>
                    <p>
                        {countQuestions()} 
                        <Translate value="QUESTION.LABEL" /> 
                        {' / '} 
                        <Translate value="CERTIFICATION.LANGUAGE_TYPE" />: {t(certification.languageType)}
                    </p>
                </div>
            </aside>

            <SButtonOptionContainer>
 
                <LButtonOutlined hidden={!onStartQuiz} text="START_QUIZ" onClick={onStartQuiz}/>

                <LButtonOutlined hidden={!onFinishQuiz} text="FINISH_QUIZ" onClick={onFinishQuiz}/>

                <LButtonOutlined hidden={!onCancelQuiz} text="CANCEL" onClick={onCancelQuiz}/>

                <LIconButton 
                    arialLabel="language"
                    onClick={() => changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')} 
                    icon={<TranslateOutlined />}
                    tooltip="CHANGE_LANGUAGE"
                />

                <LIconButton 
                    arialLabel="theme"
                    onClick={toggleTheme} 
                    icon={themeName === 'light' ? <DarkMode /> : <LightMode />}
                    tooltip={themeName === 'light' ? 'DARK_MODE' : 'LIGHT_MODE' }
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