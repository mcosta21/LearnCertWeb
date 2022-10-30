import { ButtonBaseProps, ButtonProps } from "@mui/material";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { SButton } from "./styles";

export interface LButtonOutlinedProps {
    text: string
    onClick?: () => void;
    hidden?: boolean;
    disabled?: boolean;
    icon?: ReactElement;
    variant?: "text" | "outlined" | "contained" | undefined;
    type?: "button" | "submit" | "reset" | undefined;
}

export default function LButtonOutlined({
    text,
    hidden = false,
    onClick,
    disabled = false,
    icon,
    variant = 'outlined',
    type = 'button'
}: LButtonOutlinedProps){
    const { t } = useTranslation();

    return (
        <SButton 
            style={{ display: hidden ? 'none' : 'block' }} 
            disabled={disabled} 
            variant={variant}
            onClick={onClick}
            type={type}
        >
            {!!icon && <span>{icon}</span>}
            {t(text)}
        </SButton>
    )
}