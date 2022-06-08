import { ButtonBaseProps } from "@mui/material"
import { ReactNode } from "react";
import { SButtonContainer } from "./styles"

interface Props extends HTMLButtonElement {
    width?: string;
    height?: string;
}

export function LDashedButton({
    height = '60px',
    width = '100%',
    children,
    ...rest
}){
    return (
        <SButtonContainer 
            style={{
                width,
                height,
            }}
            {...rest}
        >
            {children}
        </SButtonContainer>
    )
}