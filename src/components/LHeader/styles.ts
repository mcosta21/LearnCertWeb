import styled from "styled-components";
import { GlobalTheme } from '@styles/theme';

export const SHeaderContainer = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;

    > aside {

        img {
            margin-top: 4px;
            height: 42px;
        }
    } 

    > div {
        display: flex;
        align-items: center;
        gap: 1rem;

        .user-info {
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
        }

    }

    .github-button {
        display: none;
    }
`