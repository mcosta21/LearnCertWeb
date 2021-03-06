import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;

    label {
        font-size: 0.8rem;
        color: ${({ theme }: GlobalTheme) => theme.text};
    }

    span {
        font-size: 0.7rem;
        color: ${({ theme }: GlobalTheme) => theme.colors.red};
        display: block;
        width: 100%;
        height: 1.3rem;
    }
`;

export const SInput = styled.input`
    height: 40px;
    border: 1px solid ${({ theme }: GlobalTheme) => theme.border};
    border-radius: 3px;
    background-color: ${({ theme }: GlobalTheme) => theme.backgroundSecondary};
    color: ${({ theme }: GlobalTheme) => theme.text};
    transition: 0.2s ease;
    outline: none;
    padding: 0 10px;

    &:hover, &:focus {
        border-color: ${({ theme }: GlobalTheme) => theme.colors.purple};
    }
    
    &.invalid, &.invalid:hover, &.invalid:focus {
        border-color: ${({ theme }: GlobalTheme) => theme.colors.red} !important;
    }
`;

