import { GlobalTheme } from 'styles/theme';
import styled from 'styled-components';

export const SQuestionCardContainer = styled.li`
    list-style: none;
    background-color: ${({ theme }: GlobalTheme) => theme.background};
    border: 1px solid ${({ theme }: GlobalTheme) => theme.border};
    padding: 10px;
    border-left: 4px solid ${({ theme }: GlobalTheme) => theme.border};
    transition: 0.3s all ease;

    &:hover {
        border-left: 4px solid ${({ theme }: GlobalTheme) => theme.colors.purple};
    }
`;

export const SAnswerOptionInput = styled.aside`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }: GlobalTheme) => theme.border};

    .l-input {

        label {
            font-size: 0.7rem;
        }

    }

    .answer-is-correct {
        align-items: flex-start;
        
        .MuiFormControlLabel-label {
            font-size: 0.7rem;
            padding-left: 10px;
            margin-top: -2px;
        }
    }
`;


export const SAnswerOptionContainer = styled.div`
    background-color: ${({ theme }: GlobalTheme) => theme.backgroundSecondary};
    border: 1px solid ${({ theme }: GlobalTheme) => theme.border};
    margin-top: 10px;
`

export const SAnswerOptionItems = styled.div`
    padding: 10px;
`

export const SAnswerOptionItem = styled.div`
    padding: 5px 10px;

    span {
        font-size: 0.7rem;
    }
`