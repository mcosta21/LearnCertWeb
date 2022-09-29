import { useTranslation } from "react-i18next";
import { SButton } from "./styles";

interface Props {
    text: string
    onClick?: () => void;
    hidden?: boolean;
    disabled?: boolean;
}

export default function LButtonOutlined({
    text,
    hidden = false,
    onClick,
    disabled = false
}: Props){
    const { t } = useTranslation();

    return (
        <SButton style={{ display: hidden ? 'none' : 'block' }} disabled={disabled} variant="outlined" onClick={onClick}>
            {t(text)}
        </SButton>
    )
}