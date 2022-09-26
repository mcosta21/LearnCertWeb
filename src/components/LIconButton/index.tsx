import { IconButton, Tooltip } from "@mui/material";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface Props {
    onClick?: () => void;
    arialLabel?: string;
    icon: ReactElement;
    tooltip?: string;
}

export default function  LIconButton({
    onClick,
    arialLabel,
    icon,
    tooltip
}: Props){
    const { t } = useTranslation();
    return (
        <Tooltip title={!!tooltip ? t(tooltip) : ''}>
            <IconButton 
                aria-label={arialLabel}
                size="small" 
                onClick={onClick} 
            >
                {icon}
            </IconButton>
        </Tooltip>
    )
}