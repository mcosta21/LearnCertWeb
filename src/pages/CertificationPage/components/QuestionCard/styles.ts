import { GlobalTheme } from '@styles/theme';
import styled, { keyframes } from 'styled-components';
import { fadeInUp, fadeInDown } from 'react-animations';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const fadeInDownAnimation = keyframes`${fadeInDown}`;

export const SCardContainer = styled.aside`
    animation: 1s ${fadeInUpAnimation};
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }: GlobalTheme) => theme.border};
    border-radius: 7px;
    gap: 0.5rem;
    transition: all 0.3s ease;
    width: 100%;
    height: 100%;
    background: ${({ theme }: GlobalTheme) => theme.backgroundSecondary};
    box-shadow: 0 0 20px ${({ theme }: GlobalTheme) => theme.shadow};

    &.collapsed {
        cursor: pointer;
    }

    &:hover, &:hover footer, &:hover h3 {
        border-color: ${({ theme }: GlobalTheme) => theme.colors.purple};
    }
`;

export const SQuestionDescription = styled.p`
    color: ${({ theme }: GlobalTheme) => theme.text};
    font-size: 0.8rem;
    line-height: 1.2rem;
    padding: 6px 125px 14px 30px;
    overflow-x: auto;

    @media (max-width: 800px) {
        padding-right: 30px;
        margin-top: 8px;
    }
`;

export const SQuestionFooter  = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${({ theme }: GlobalTheme) => theme.border};
    padding: 15px 30px;

    button, a {
        background-color: transparent;
        color: ${({ theme }: GlobalTheme) => theme.text};
        border: none;
        cursor: pointer;
        transition:color 0.3s ease;
        font-size: 0.8rem;
        text-decoration: none;

        &:hover {
            color: ${({ theme }: GlobalTheme) => theme.textSecondary};
        }
    }
    
    a.hidden {
        visibility: hidden;
    }
`


export const SOptionsList = styled.ul`
    list-style: none;
    padding: 0 0 18px 30px;

    li + li {
        margin-top: 1rem;
    }
`

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

