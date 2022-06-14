import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }: GlobalTheme) => theme.border};
    border-radius: 7px;
    width: 100%;
    height: 100%;
    cursor: not-allowed;
    gap: 10px;

    svg {
        color: ${({ theme }: GlobalTheme) => theme.textSecondary};
    }
`;


export const SEmptyTitle = styled.p`
    color: ${({ theme }: GlobalTheme) => theme.textSecondary};
    font-size: 0.8rem;
    line-height: 1.2rem;
`;
