import LButtonOutlined, { LButtonOutlinedProps } from "@components/LButtonOutlined";
import { useTranslation } from "react-i18next";

interface Props extends LButtonOutlinedProps {
}

export default function LButton({
    text,
    hidden = false,
    onClick,
    disabled = false,
    icon,
    type,
    alwaysShowIcon
}: Props){
    return (
        <LButtonOutlined 
            text={text}
            hidden={hidden}
            onClick={onClick}
            disabled={disabled}
            icon={icon}
            type={type}
            variant="contained"
            alwaysShowIcon={alwaysShowIcon}
        />
    )
}