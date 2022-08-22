
import { Delete, Edit } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { LanguageTypeOptions } from "@pages/CertificationFormPage/domain/certification.model";
import { CertificationFlat } from "@pages/CertificationListPage/domain/certification-flat.model";
import { RouterKey } from "@routes/routekeys";
import Translate from "@services/i18nProvider/Translate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SCertificateCard, SOptionsContainer } from "./styles";
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface Props {
    certification: CertificationFlat;
    isAdmin: boolean;
    onDelete: (id: string) => void;
}

export function CertificationCard({
    certification,
    isAdmin,
    onDelete
}: Props) {

    const navigate = useNavigate();

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
        onDelete(certification.id);
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

    return (
        <SCertificateCard onDoubleClick={handleOpenCertification}>
            <div className="certificate-img">
                <img src={certification.imageUrl} alt={certification.title} />
            </div>
            <div className="certificate-info-container">
                <span className="certificate-name">
                    {certification.title}
                </span>
                <span className="certificate-questions">
                    {certification.countQuestions + ' '}
                    <Translate value="QUESTION.LABEL" />
                </span>
            </div>
            <SOptionsContainer>
                <img src={getImageLanguage()} />
                {
                    isAdmin && (
                        <>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleOpenOptions}
                            >
                                <MoreVertIcon />
                            </IconButton>

                            <Menu
                                id="long-menu"
                                MenuListProps={{'aria-labelledby': 'long-button'}}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleCloseOptions}
                            >
                                <MenuItem key="edit-certification"onClick={handleEditCertification}>
                                    <Translate value="EDIT"/>
                                </MenuItem>

                                <MenuItem key="remove-certification"onClick={handleDeleteCertification}>
                                    <Translate value="REMOVE"/>
                                </MenuItem>
                            </Menu>
                        </>
                    )
                }
            </SOptionsContainer>
            
        </SCertificateCard>
    )
}

