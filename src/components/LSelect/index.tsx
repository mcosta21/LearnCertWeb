import { LLabel } from "@components/LLabel";
import { Select, SelectChangeEvent } from "@mui/material";
import { ReactNode } from "react";
import { SSelectContainer } from "./styles";

interface Props {
    label: string;
    defaultValue?: string;
    onChange: (event: SelectChangeEvent) => void;
    children: ReactNode;
    required?: boolean;
    error?: string;
    hideError?: boolean;
}

export default function LSelect({
    label,
    defaultValue,
    onChange,
    children,
    required,
    error,
    hideError
}: Props){
    return (
        <SSelectContainer className="l-select">
            <LLabel hidden={!label} value={`${label} ${required ? '*' : ''}`} />
            <Select
                value={defaultValue}
                onChange={onChange}
            >
                {children}
            </Select>
            {!hideError && <span>{error}</span>}
        </SSelectContainer>
        
    )
}