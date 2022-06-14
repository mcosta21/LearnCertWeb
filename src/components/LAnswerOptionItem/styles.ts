import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const LAnswerOptionItemContainer = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }: GlobalTheme) => theme.text};
    font-size: 0.9rem;
    transition: color 0.3s ease;
    cursor: pointer;
    gap: 0.8rem;
`;

export const SCommonOptionButton = styled.button`
    height: 22px;
    width: 22px;
    border-radius: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SNormalOptionButton = styled(SCommonOptionButton)`
    border: 2px solid ${({ theme }: GlobalTheme) => theme.textSecondary};
    background-color: transparent;
`;

export const SSelectedOptionButton = styled(SCommonOptionButton)`
    border: 2px solid ${({ theme }: GlobalTheme) => theme.colors.purple};
    background-color: transparent;

    span {
        display: block;
        border-radius: 40px;
        height: 8px;
        width: 8px;
        background-color: ${({ theme }: GlobalTheme) => theme.colors.purple};
    }
`;

export const SCorrectedOptionButton = styled(SCommonOptionButton)`
    border: 2px solid ${({ theme }: GlobalTheme) => theme.colors.green};
    background-color: ${({ theme }: GlobalTheme) => theme.colors.green};
`;

export const SWrongOptionButton = styled(SCommonOptionButton)`
    border: 2px solid ${({ theme }: GlobalTheme) => theme.colors.red};
    background-color: ${({ theme }: GlobalTheme) => theme.colors.red};
`;

