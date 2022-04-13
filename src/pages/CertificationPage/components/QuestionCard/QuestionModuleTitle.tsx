import styled from 'styled-components';
import { GlobalTheme } from 'styles/theme';
import { FiChevronDown } from 'react-icons/fi';

interface Props {
    title: string;
    focused: boolean;
    handleCollapse: () => void;
}

export default function QuestionModuleTitle({
    title,
    focused = false,
    handleCollapse
}: Props){
    return (
        <>
            {
                focused ?
                (
                    <SFocusedTitle>
                        <div>
                            <span>
                                1.1
                            </span>
                            {title}
                        </div>
                        <button onClick={handleCollapse}>
                            <FiChevronDown size={20}/>
                        </button>
                    </SFocusedTitle>

                ) : (
                    <SNormalTitle>
                        <span>
                            1.1
                        </span>
                        {title}
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

const SNormalTitle = styled.p`
    color: ${({ theme }: GlobalTheme) => theme.textSecondary};
    font-size: 0.7rem;
    padding: 16px 16px 0 30px;

    span {
        margin-right: 1rem;
    }
`