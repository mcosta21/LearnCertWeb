import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';
import { FiChevronDown } from 'react-icons/fi';
import { Module, Question } from '@pages/CertificationFormPage/domain/certification.model';
import { Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
    question: Question;
    module: Module;
    focused: boolean;
    handleCollapse: () => void;
    answered?: boolean;
}

export default function QuestionModuleTitle({
    question,
    module,
    focused = false,
    handleCollapse,
    answered= false
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
                                {module.code}.{question.code}
                            </span>
                            {module.title}
                        </div>
                        <button onClick={handleCollapse}>
                            <FiChevronDown size={20}/>
                        </button>
                    </SFocusedTitle>

                ) : (
                    <SNormalTitle>
                        <span>
                            {module.code}.{question.code}
                        </span>
                        {module.title}

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
        top: 75%;
        right: 1.2rem;
        height: 30px;
        
        span {
            font-weight: 600;
        }
    }
`