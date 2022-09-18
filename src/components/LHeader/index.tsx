import { useMyTheme } from "@hooks/useMyTheme";
import { useUser } from "@hooks/useUser";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import Translate from "@services/i18nProvider/Translate";
import { SHeaderContainer } from "./styles";

interface Props {

}

export default function LHeader({

}: Props){
    const { themeName, toggleTheme } = useMyTheme();
    const { getAuthenticatedUser, logout } = useUser();
    const user = getAuthenticatedUser();

    if(!user) {
        return <></>
    }

    return (
        <SHeaderContainer>
            <aside>
                <img src={themeName === 'light' ? '/images/logo-purple.png' : '/images/logo-white.png'} />
                <span>{user.name}</span>
            </aside>
            <div>
                <IconButton 
                    aria-label="theme"
                    size="small" 
                    onClick={() => toggleTheme()} 
                >
                    { themeName === 'light' ? <DarkMode /> : <LightMode /> }
                </IconButton>
                <Button
                    variant="contained"
                    size="medium"
                    type="button"
                    onClick={logout}
                >
                    <Translate value="USER.LOGOUT" />
                </Button>
            </div>
        </SHeaderContainer>
    )
}