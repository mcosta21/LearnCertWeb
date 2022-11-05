
import { Delete, Edit } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { LanguageTypeOptions } from "@pages/CertificationFormPage/domain/certification.model";
import { CertificationFlat } from "@pages/CertificationListPage/domain/certification-flat.model";
import { RouterKey } from "@routes/routekeys";
import Translate from "@services/i18nProvider/Translate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SCertificateCard, SOptionsContainer } from "./styles";
import LIconButton from "@components/LIconButton";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from "react-i18next";
import LAvatar from "@components/LAvatar";
import LLogo from "@components/LLogo";
import useWindowDimensions from "@hooks/useWindowDimensions";

interface Props {
    certification: CertificationFlat;
    isAdmin: boolean;
    userId: string;
}

export function CertificationCard({
    certification,
    userId,
    isAdmin,
}: Props) {


    const { isMobile } = useWindowDimensions();

    const navigate = useNavigate();

    const { t } = useTranslation();

    function handleOpenCertification(){
        handleCloseOptions();
        navigate(`${RouterKey.CertificationLearn}/${certification.id}`)
    }

    function handleEditCertification(){
        handleCloseOptions();
        navigate(`${RouterKey.CertificationForm}/${certification.id}`)
    }

    function handleDeleteCertification() {
        handleCloseOptions();
        // onDelete(certification.id);
    }

    function getImageLanguage(){
        return LanguageTypeOptions.find(x => x.languageType === certification.languageType)?.image;
    }

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleOpenOptions = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseOptions = () => {
        setAnchorEl(null);
    };

    const canUpdate = certification.creatorId === userId || isAdmin;

    const creatorName = certification.creatorId === userId ? t('YOU') : certification.creator;

    return (
        <SCertificateCard onDoubleClick={handleOpenCertification}>

            {
                <div className="certificate-img">
                    {
                        !!certification.imageUrl ? (
                            <img src={certification.imageUrl} alt={certification.title} />
                        ) : (
                            <LLogo type="icon" />
                        )
                    }
                </div>
            }
            
            <div className="certificate-info-container">

                <aside>
                    <h1 className="certificate-name">
                        {certification.title}
                    </h1>

                    <span className="certificate-subtitle">
                        {certification.countQuestions + ' ' + t(certification.countQuestions > 1 ? 'QUESTION.LABEL' : 'QUESTION.SINGULAR')}
                        {' / ' + t(certification.languageType)}
                    </span>
                </aside>

                <footer>

                    <span className="certificate-subtitle">
                        <LAvatar src={certification.creatorAvatar} size={26}/>
                        
                                <span>
                                    {!isMobile && (<Translate value="CERTIFICATION.CREATED_BY" />)}
                                    <strong>{' ' + creatorName}</strong>
                                </span>
                    </span>

                    <SOptionsContainer>
                        {
                            certification.quizCounter > 0 && (
                                <Tooltip title={t('CERTIFICATION.QUIZ_EXECUTED')}>
                                    <strong className="quiz-executed">{certification.quizCounter}</strong>
                                </Tooltip>
                            ) 
                        }

                        <LIconButton 
                            arialLabel="start"
                            onClick={handleOpenCertification} 
                            icon={<PlayArrowIcon />}
                            tooltip="START"
                        />

                        {
                            canUpdate === true && (
                                <LIconButton 
                                    arialLabel="edit"
                                    onClick={handleEditCertification} 
                                    icon={<EditIcon />}
                                    tooltip="EDIT"
                                />
                            )
                        }
                    </SOptionsContainer>
                </footer>
               


            </div>

        </SCertificateCard>
    )
}

