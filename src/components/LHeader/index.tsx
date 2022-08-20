import { useUser } from "@hooks/useUser"
import { Button } from "@mui/material";
import Translate from "@services/i18nProvider/Translate";
import { SHeaderContainer } from "./styles";

interface Props {

}

export default function LHeader({

}: Props){

    const { getAuthenticatedUser, logout } = useUser();
    const user = getAuthenticatedUser();

    if(!user) {
        return <></>
    }

    return (
        <SHeaderContainer>
           <span>{user.name}</span>
           <Button
                variant="contained"
                size="medium"
                type="button"
                onClick={logout}
            >
                <Translate value="USER.LOGOUT" />
            </Button>
        </SHeaderContainer>
    )
}