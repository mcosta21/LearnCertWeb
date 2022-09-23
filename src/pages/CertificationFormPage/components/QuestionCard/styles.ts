import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

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

export const SQuestionCardData = styled.div`

`

export const SQuestionCardCollapsed = styled.div`

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .question-description {
            font-size: 0.8rem;
            padding-left: 1rem;
        }
    }
`

export const SQuestionInputs = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;        

    > aside {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;

        .question-buttons {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 0.8rem;
            height: 210px;
        }

        .description-editor {
            width: 100%;

            > label {
                font-size: 0.8rem;
                margin-bottom: 10px;
                display: block;
            }

            .quill-editor {
                background: ${({ theme }: GlobalTheme) => theme.backgroundSecondary};
                height: 130px;
                
                div {
                    border-color: ${({ theme }: GlobalTheme) => theme.border};
                }

                .ql-picker-label, path, line, polygon {
                    color: ${({ theme }: GlobalTheme) => theme.text};
                    stroke: ${({ theme }: GlobalTheme) => theme.text};
                }

                .ql-container {
                    height: calc(100% - 42px);
                }
            }
        }
    }

    aside:first-child {
        flex: 1;
    }
`

export const SAnswerOptionInput = styled.aside`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }: GlobalTheme) => theme.border};
    gap: 0.5rem;

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
`

export const SAnswerOptionItems = styled.div`
    padding: 10px;
`

export const SAnswerOptionItem = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 5px;

    span {
        font-size: 0.7rem;
    }
`