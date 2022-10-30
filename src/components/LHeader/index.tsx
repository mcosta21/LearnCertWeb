import LIconButton from "@components/LIconButton";
import { useMyTheme } from "@hooks/useMyTheme";
import { useUser } from "@hooks/useUser";
import { Add, DarkMode, LightMode, TranslateOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { SHeaderContainer } from "./styles";
import GitHubLogin from 'react-github-login';
import { useEffect, useRef, useState } from "react";
import { AuthenticatedUser } from "@contexts/UserContext/UserContext";
import LogoutIcon from '@mui/icons-material/Logout';
import LButtonOutlined from "@components/LButtonOutlined";
import GitHubIcon from '@mui/icons-material/GitHub';
import LButton from "@components/LButton";
import { Avatar } from "@mui/material";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { RouterKey } from "@routes/routekeys";

interface Props {
}

interface GithubResponse {
    code: string;
}

export default function LHeader({

}: Props){

    const gitHubButtonRef= useRef<GitHubLogin>(null);
    const navigate = useNavigate();

    const location = useLocation();

    const { themeName, toggleTheme } = useMyTheme();
    const { getAuthenticatedUser, logout, loginWithGitHub } = useUser();
    const [user, setUser] = useState<AuthenticatedUser | undefined>(getAuthenticatedUser());

    const { i18n } = useTranslation();
    const { t } = useTranslation();

    function changeLanguage(language: string){
        i18n.changeLanguage(language)
    }

    function handleClickGitHubLogin() {
        gitHubButtonRef.current.onBtnClick();
     }

     function handleNewCertification(){
        navigate(RouterKey.CertificationForm);
     }

    async function onSuccess(response: GithubResponse) {
        await loginWithGitHub(response.code);
        setUser(getAuthenticatedUser());
    }

    const onFailure = response => {
        alert(t('USER.FAILED_TO_SIGNIN_WITH_GITHUB'))
    };

    const showNewCertificationButton = location.pathname !== RouterKey.CertificationForm

    return (
        <SHeaderContainer>
            <aside>
                <Link to={RouterKey.Home}>
                    <img src={themeName === 'light' ? '/images/logo-purple.png' : '/images/logo-white.png'} />
                </Link>
            </aside>
            <div>

                

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
                    user ? (
                        <LIconButton
                            arialLabel="theme"
                            tooltip="USER.LOGOUT"
                            icon={<LogoutIcon />}
                            onClick={logout}
                        />

                    ) : (
                        <LButton
                            text="USER.SIGNIN_WITH_GITHUB"
                            icon={<GitHubIcon />}
                            onClick={handleClickGitHubLogin}
                        />
                    )
                }

                {
                    (!!user && showNewCertificationButton === true) && (
                        <LButton
                            text="CERTIFICATION.CREATE_YOUR_OWN"
                            icon={<Add />}
                            onClick={handleNewCertification}
                        />
                    )
                }

                { !!user && (
                    <div className="user-info">
                        <Avatar 
                            alt={user?.name} 
                            src={user?.avatar} 
                            sx={{ width: 38, height: 38 }}
                        />
                    </div>
                )}
                

                <GitHubLogin 
                    ref={gitHubButtonRef}
                    clientId={String(import.meta.env.VITE_API_GITHUB_CLIENT_ID)}
                    redirectUri=""
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    className="github-button"
                />
                
            </div>
        </SHeaderContainer>
    )
}