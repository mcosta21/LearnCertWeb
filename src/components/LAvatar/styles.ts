import { GlobalTheme } from '@styles/theme';
import styled from 'styled-components';

export const SContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    span {
        font-size: 0.9rem;
    }

    > div {
        border: 1px solid ${({ theme }: GlobalTheme) => theme.colors.purple};
        box-shadow: 0 0 20px ${({ theme }: GlobalTheme) => theme.shadow};
    }
`

