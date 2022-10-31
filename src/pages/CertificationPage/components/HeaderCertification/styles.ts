import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SHeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    padding-top: 2rem;

    max-width: 1366px;
    margin: auto;

    aside {
        display: flex;
        align-items: center;
        gap: 1.4rem;
        
        .certification-image {
            width: 7rem;
        }

        div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;

            h1 {
                font-size: 1.2rem;
                font-weight: 600;
            }

            p {
                color: ${({ theme }: GlobalTheme) => theme.textSecondary};
                font-size: 0.9rem;
            }
        }
    }
    
`

export const SButtonOptionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`


