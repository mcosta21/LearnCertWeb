import { createGlobalStyle } from "styled-components";
import { Theme } from './theme';

export interface GlobalTheme {
    theme: Theme;
}

export default createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;  
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${({ theme }: GlobalTheme) => theme.background};
        color: ${({ theme }: GlobalTheme) => theme.text};
    }
`;
