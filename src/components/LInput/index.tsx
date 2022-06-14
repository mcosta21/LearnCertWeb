import { ChangeEvent, forwardRef, ForwardRefRenderFunction } from "react";
import { LLabel } from "@components/LLabel";
import { SInput, SInputContainer } from "./styles";

interface Props {
    label?: string;
    error?: string;
    hideError?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    value?: string;
    required?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
    {
      label,
      error,
      hideError = false,
      onChange,
      width,
      value,
      required = false,
      ...rest
    },
    ref,
  ) => {
    return (
        <SInputContainer className="l-input">
            <LLabel hidden={!label} value={`${label} ${required ? '*' : ''}`} />
            <SInput 
                ref={ref}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange ? onChange(e) : undefined}
                style={{ width }}
                className={error ? 'invalid' : ''}
                value={value}
                {...rest} 
            />
            {!hideError && <span>{error}</span>}
        </SInputContainer>
    )
}

export const LInput = forwardRef(InputBase);