import { ChangeEvent, forwardRef, ForwardRefRenderFunction } from "react";
import { LLabel } from "@components/LLabel";
import { SInput, SInputContainer } from "./styles";
import { useTranslation } from "react-i18next";

interface ErrorMessage {
    message: string;
}
interface Props {
    label?: string;
    error?: string;
    type?: string;
    hideError?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    width?: string;
    value?: string;
    required?: boolean;
    placeholder?: string;
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
      type = 'text',
      placeholder = '',
      ...rest
    },
    ref,
  ) => {
    
    const { t } = useTranslation();

    return (
        <SInputContainer className="l-input">
            <span>
                <LLabel hidden={!label} value={label} />
                {!!label && required ? ' *' : ''}
            </span>
            <SInput 
                ref={ref}
                onChange={(e: ChangeEvent<HTMLInputElement>) => onChange ? onChange(e) : undefined}
                style={{ width }}
                className={error ? 'invalid' : ''}
                value={value}
                type={type}
                placeholder={placeholder}
                {...rest} 
            />
            <span>
                {!hideError && error ? t(error) : '' }
            </span>
        </SInputContainer>
    )
}

export const LInput = forwardRef(InputBase);