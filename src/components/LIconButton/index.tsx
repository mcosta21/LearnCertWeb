import { Tooltip } from "@mui/material";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { SIconButton } from "./styles";

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
            <SIconButton 
                aria-label={arialLabel}
                size="small" 
                onClick={onClick} 
            >
                {icon}
            </SIconButton>
        </Tooltip>
    )
}