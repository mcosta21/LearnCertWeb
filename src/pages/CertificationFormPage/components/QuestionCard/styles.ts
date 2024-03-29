import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SQuestionCardContainer = styled.li`
    list-style: none;
    background-color: ${({ theme }: GlobalTheme) => theme.background};
    border: 1px solid ${({ theme }: GlobalTheme) => theme.border};
    padding: 1.4rem;
    border-left: 4px solid ${({ theme }: GlobalTheme) => theme.border};
    transition: 0.3s all ease;

    &:hover {
        border-left: 4px solid ${({ theme }: GlobalTheme) => theme.colors.purple};
    }

    @media (max-width: 700px) {
        padding: 0.7rem;
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
                height: 200px;
                overflow-y: scroll;
                resize: vertical;
                border: 1px solid ${({ theme }: GlobalTheme) => theme.border};

                div {
                    border-color: transparent;
                    border-right-color: ${({ theme }: GlobalTheme) => theme.border};
                }

                .ql-toolbar {
                    border-bottom-color: ${({ theme }: GlobalTheme) => theme.border};
                }

                .ql-picker-label, path, line, polygon, polyline, rect {
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
    

    @media (max-width: 700px) {
        flex-direction: column-reverse;

        > aside {
            width: 100%;

            .question-buttons {
                flex-direction: row;
                height: 100%;
                justify-content: flex-end;
                width: 100%;
            }
        }
    }
`

export const SAnswerOptionInput = styled.aside`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }: GlobalTheme) => theme.border};
    gap: 0.5rem;

    > aside {
        display: flex;
        align-items: center;
        gap: 0.6rem;
    }

    .l-input {

        label {
            font-size: 0.7rem;
        }

    }

    .answer-is-correct {
        align-items: flex-start;
        min-width: 85px;
        
        .MuiFormControlLabel-label {
            font-size: 0.7rem;
            padding-left: 10px;
            margin-top: -2px;
        }
    }

    @media (max-width: 700px) {
        & {
            flex-direction: column;
            gap: 0;

            > aside {
                justify-content: flex-end;
                width: 100%;
            }
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