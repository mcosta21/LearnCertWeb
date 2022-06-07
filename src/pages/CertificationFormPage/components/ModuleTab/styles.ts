import styled from 'styled-components';
import { GlobalTheme } from 'styles/theme';

export const SModuleTabContainer = styled.section`
    padding: 20px;
    background: ${({ theme }: GlobalTheme) => theme.backgroundSecondary};
`;

export const SQuestionContainer = styled.ul`
    li + li {
        margin-top: 1rem;
    }
`

export const SButtonAddQuestion = styled.button`
    width: 100%;
    height: 60px;
    background: ${({ theme }: GlobalTheme) => theme.backgroundSecondary};
    color: ${({ theme }: GlobalTheme) => theme.text};
    border: 2px dashed ${({ theme }: GlobalTheme) => theme.border};
    margin-top: 1rem;
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover {
        background: ${({ theme }: GlobalTheme) => theme.background};
        border-color: ${({ theme }: GlobalTheme) => theme.colors.purple};
    }
`
