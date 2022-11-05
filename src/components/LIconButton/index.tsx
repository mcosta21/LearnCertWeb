import { useMyTheme } from "@hooks/useMyTheme";
import { Tooltip } from "@mui/material";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { SIconButton } from "./styles";

interface Props {
    onClick?: () => void;
    arialLabel?: string;
    icon: ReactElement;
    tooltip?: string;
    disabled?: boolean;
    variant?: "outlined" | "contained";
}

export default function  LIconButton({
    onClick,
    arialLabel,
    icon,
    tooltip,
    disabled = false,
    variant = 'outlined'
}: Props){
    const { t } = useTranslation();

    const { theme } = useMyTheme();

    const backgroundColor = variant === 'outlined' ? theme.backgroundSecondary : theme.colors.purple;
    const borderColor = variant === 'outlined' ?  theme.border : theme.colors.purple;
    
    return (
        <Tooltip title={!!tooltip ? t(tooltip) : ''}>
            <SIconButton 
                aria-label={arialLabel}
                size="small" 
                onClick={onClick} 
                disabled={disabled}
                style={{ backgroundColor, borderColor }}
            >
                {icon}
            </SIconButton>
        </Tooltip>
    )
}