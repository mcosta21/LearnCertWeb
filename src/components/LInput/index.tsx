import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { SInput, SInputContainer } from "./styles";

interface Props {
    label?: string;
    error?: string;
    hideError?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
    {
      label,
      error,
      hideError = false,
      ...rest
    },
    ref,
  ) => {
    return (
        <SInputContainer className="l-input">
            <label hidden={!label}>{label}</label>
            <SInput 
                ref={ref}
                {...rest} 
            />
            {!hideError && <span>{error}</span>}
        </SInputContainer>
    )
}

export const LInput = forwardRef(InputBase);