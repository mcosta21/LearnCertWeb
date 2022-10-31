import styled from "styled-components";
import { GlobalTheme } from '@styles/theme';

export const SHeaderContainer = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;

    > div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .github-button {
        display: none;
    }
`