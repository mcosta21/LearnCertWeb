import styled from "styled-components";
import { GlobalTheme } from '@styles/theme';

export const SHeaderContainer = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;

    aside {
        display: flex;
        align-items: center;
        gap: 1.8rem;

        img {
            height: 42px;
        }

        span {
            padding-left: 1.6rem;
            border-left: 1px solid ${({ theme }: GlobalTheme) => theme.text};
        }
    } 

    > div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`