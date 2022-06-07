import { LLabel } from "../../components/LLabel";
import { ChangeEvent, ChangeEventHandler, forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { SInput, SInputContainer } from "./styles";

interface Props {
    label?: string;
    error?: string;
    hideError?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    value?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
    {
      label,
      error,
      hideError = false,
      onChange,
      width,
      value,
      ...rest
    },
    ref,
  ) => {
    return (
        <SInputContainer className="l-input">
            <LLabel hidden={!label} value={label} />
            <SInput 
                ref={ref}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange ? onChange(e) : undefined}
                style={{ width }}
                value={value}
                {...rest} 
            />
            {!hideError && <span>{error}</span>}
        </SInputContainer>
    )
}

export const LInput = forwardRef(InputBase);