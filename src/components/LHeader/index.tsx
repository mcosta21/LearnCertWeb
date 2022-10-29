import LIconButton from "@components/LIconButton";
import { useMyTheme } from "@hooks/useMyTheme";
import { useUser } from "@hooks/useUser";
import { DarkMode, LightMode, TranslateOutlined } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Translate from "@services/i18nProvider/Translate";
import { useTranslation } from "react-i18next";
import { SHeaderContainer } from "./styles";
import GitHubLogin from 'react-github-login';
import * as githubApi from '@services/authentication/authentication.service';
import { useState } from "react";
import { AuthenticatedUser } from "@contexts/UserContext/UserContext";

interface Props {
}

interface GithubResponse {
    code: string;
}

export default function LHeader({

}: Props){
    const { themeName, toggleTheme } = useMyTheme();
    const { getAuthenticatedUser, logout, loginWithGitHub } = useUser();
    const [user, setUser] = useState<AuthenticatedUser | undefined>(getAuthenticatedUser());

    const { i18n } = useTranslation();

    function changeLanguage(language: string){
        i18n.changeLanguage(language)
    }

    async function onSuccess(response: GithubResponse) {
        await loginWithGitHub(response.code);
        setUser(getAuthenticatedUser());
    }

    const onFailure = response => console.error(response);
    
    return (
        <SHeaderContainer>
            <aside>
                <img src={themeName === 'light' ? '/images/logo-purple.png' : '/images/logo-white.png'} />
                <span>{user?.name}</span>
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
                        <Button
                            variant="contained"
                            size="medium"
                            type="button"
                            onClick={logout}
                        >
                            <Translate value="USER.LOGOUT" />
                        </Button>
                    ) : (
                        <GitHubLogin 
                            clientId={String(import.meta.env.VITE_API_GITHUB_CLIENT_ID)}
                            redirectUri=""
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                        />
                    )
                }
                
            </div>
        </SHeaderContainer>
    )
}