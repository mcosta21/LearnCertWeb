import { createGlobalStyle } from "styled-components";
import { GlobalTheme } from './theme';

export default createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;  
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
    }

    body {
        background-color: ${({ theme }: GlobalTheme) => theme.background};
        color: ${({ theme }: GlobalTheme) => theme.text};
    }
`;
