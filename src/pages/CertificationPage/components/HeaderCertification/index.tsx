import { SButtonOptionContainer, SHeaderContainer } from "./styles";
import { Certification } from "@pages/CertificationFormPage/domain/certification.model";
import Translate from "@services/i18nProvider/Translate";
import { IconButton, Tooltip } from "@mui/material";
import { useMyTheme } from "@hooks/useMyTheme";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { DarkMode, FirstPage, LightMode, TranslateOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { RouterKey } from "@routes/routekeys";
import LIconButton from "@components/LIconButton";

interface Props {
    certification: Certification;
    showAllAnswer: boolean;
    handleShowAllAnswer: () => void;
}

export default function HeaderCertification({
    certification,
    showAllAnswer = false,
    handleShowAllAnswer
}: Props){

    const navigate = useNavigate();
    
    const { themeName, toggleTheme } = useMyTheme();

    const { i18n } = useTranslation();

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
                        <Translate value="CERTIFICATION.LANGUAGE_TYPE" />: {certification.languageType}
                    </p>
                </div>
            </aside>

            <SButtonOptionContainer>
 
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

                <LIconButton 
                    arialLabel="visibility"
                    onClick={handleShowAllAnswer} 
                    icon={showAllAnswer ? <VisibilityOff /> : <Visibility />}
                    tooltip={showAllAnswer ? 'HIDE_ANSWERS' : 'SHOW_ANSWERS' }
                />

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