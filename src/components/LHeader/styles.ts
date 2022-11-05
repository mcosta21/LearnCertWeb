import styled from "styled-components";
import { GlobalTheme } from '@styles/theme';

export const SHeaderContainer = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({ theme }: GlobalTheme) => theme.dimensions.isMobile ? '0.5rem 1.5rem' : '0 3rem'} !important;

    > div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .github-button {
        display: none;
    }
`