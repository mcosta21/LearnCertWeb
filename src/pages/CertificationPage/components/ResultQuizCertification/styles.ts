import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SContainer = styled.div`
`;

export const SHeader = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;

    img {
        height: 90px;
    }
`;

export const SResultTitle = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    padding: 0 1rem;
    margin-bottom: .5rem;

    @media (max-width: 600px) {
        font-size: 1.1rem;
    }
`;

export const SResultSubTitle = styled.p`
    text-align: center;
    color: ${({ theme }: GlobalTheme) => theme.textSecondary};
    font-size: 0.8rem;
    padding: 0 1rem;

    strong {
        font-weight: 700;
    }

    @media (max-width: 600px) {
        font-size: 0.7rem;
    }
`;

export const SFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0;
`
