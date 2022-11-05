import LIconButton from "@components/LIconButton";
import useWindowDimensions from "@hooks/useWindowDimensions";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { SButton } from "./styles";

export interface LButtonOutlinedProps {
    text: string
    onClick?: () => void;
    hidden?: boolean;
    disabled?: boolean;
    icon: ReactElement;
    variant?: "outlined" | "contained";
    type?: "button" | "submit";
    alwaysShowIcon?: boolean;
}

export default function LButtonOutlined({
    text,
    hidden = false,
    onClick,
    disabled = false,
    icon,
    variant = 'outlined',
    type = 'button',
    alwaysShowIcon = false
}: LButtonOutlinedProps){
    const { t } = useTranslation();
    const { isMobile } = useWindowDimensions();

    console.log(isMobile)

    if(isMobile) {
        return <LIconButton
                    arialLabel="language"
                    disabled={disabled} 
                    variant={variant}
                    onClick={onClick} 
                    icon={icon}
                    tooltip={t(text)}
               />
    }

    return (
        
        <SButton 
            disabled={disabled} 
            variant={variant}
            onClick={onClick}
            type={type}
            style={{ display: hidden ? 'none' : 'block' }} 
        >
            <div>
                {alwaysShowIcon === true && <span>{icon}</span>}
                {t(text)}
            </div>
        </SButton>
    )
}