import { Chip } from '@mui/material';
import { Question, QuestionModelCard } from '@pages/CertificationFormPage/domain/certification.model';
import { GlobalTheme } from '@styles/theme';
import { useTranslation } from 'react-i18next';
import { FiChevronUp } from 'react-icons/fi';
import styled from 'styled-components';

interface Props {
    question: QuestionModelCard;
    focused: boolean;
    handleCollapse: () => void;
    answered?: boolean;
}

export default function QuestionModuleTitle({
    question,
    focused = false,
    handleCollapse,
    answered = false
}: Props){
    const { t } = useTranslation();

    return (
        <>
            {
                focused ?
                (
                    <SFocusedTitle>
                        <div>
                            <span>
                                {question.moduleCode}.{question.code}
                            </span>
                            {question.moduleTitle}
                        </div>
                        <button onClick={handleCollapse}>
                            <FiChevronUp size={20}/>
                        </button>
                    </SFocusedTitle>

                ) : (
                    <SNormalTitle>
                        <span>
                            {question.moduleCode}.{question.code}
                        </span>
                        {question.moduleTitle}

                        {answered && <Chip className="answered-badge" color="success" label={t("ANSWERED")} />}

                    </SNormalTitle>
                )
            }
        </>
    )
};

const SFocusedTitle = styled.h3`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }: GlobalTheme) => theme.text};
    font-weight: 600;
    font-size: 0.9rem;
    border-bottom: 1px solid ${({ theme }: GlobalTheme) => theme.border};
    padding: 12px 12px 12px 30px;

    div span {
        font-weight: 600;
        margin-right: 1rem;
    }

    
    button {
        background-color: transparent;
        border: none;
        width: 30px;
        height: 30px;
        color: ${({ theme }: GlobalTheme) => theme.text};
        cursor: pointer;
    }
`

const SNormalTitle = styled.div`
    color: ${({ theme }: GlobalTheme) => theme.textSecondary};
    font-size: 0.7rem;
    padding: 16px 16px 0 30px;
    position: relative;

    > span {
        margin-right: 1rem;
    }

    .answered-badge{
        position: absolute;
        background-color: ${({ theme }: GlobalTheme) => theme.colors.green};
        color: ${({ theme }: GlobalTheme) => theme.background};
        top: 50%;
        right: 1.1rem;
        height: 28px;
        
        span {
            font-weight: 600;
        }
    }
`