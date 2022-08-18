import { SButtonOptionContainer, SHeaderContainer } from "./styles";
import { GoSettings } from 'react-icons/go';
import { Certification } from "@pages/CertificationFormPage/domain/certification.model";
import Translate from "@services/i18nProvider/Translate";
import { IconButton } from "@mui/material";
import { useMyTheme } from "@hooks/useMyTheme";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { DarkMode, FirstPage, LightMode, TranslateOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { RouterKey } from "@routes/routekeys";

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
                <IconButton 
                    aria-label="language"
                    size="small" 
                    onClick={() => changeLanguage(i18n.language === 'pt' ? 'en' : 'pt')} 
                >
                    <TranslateOutlined />
                </IconButton>

                <IconButton 
                    aria-label="theme"
                    size="small" 
                    onClick={() => toggleTheme()} 
                >
                    { themeName === 'light' ? <DarkMode /> : <LightMode /> }
                </IconButton>    

                <IconButton 
                    aria-label="visibility"
                    size="small" 
                    onClick={handleShowAllAnswer} 
                >
                    { showAllAnswer ? <VisibilityOff /> : <Visibility /> }
                </IconButton>

                <IconButton 
                    aria-label="go-back"
                    size="small" 
                    onClick={() => goBack()} 
                >
                    <FirstPage />
                </IconButton>
            </SButtonOptionContainer>

            
        </SHeaderContainer>
    )
}