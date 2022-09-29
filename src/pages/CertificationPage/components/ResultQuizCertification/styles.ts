import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SContainer = styled.div`
    padding: 2rem 1rem 1rem 1rem;
`;

export const SHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    img {
        height: 90px;
    }
`;

export const SResultTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: .5rem;
`;

export const SResultSubTitle = styled.p`
    text-align: center;
    color: ${({ theme }: GlobalTheme) => theme.textSecondary};
    font-size: .8rem;

    strong {
        font-weight: 700;
    }
`;

export const SFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
`
