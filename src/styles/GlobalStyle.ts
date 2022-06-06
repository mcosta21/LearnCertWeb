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
        background-color: ${({ theme }: GlobalTheme) => theme.background} !important;
        color: ${({ theme }: GlobalTheme) => theme.text} !important;
    }

    .MuiTab-root {
        border-bottom: 1px solid ${({ theme }: GlobalTheme) => theme.border} !important;
    }

    .MuiButtonBase-root {
        color: ${({ theme }: GlobalTheme) => theme.text} !important;
    }

    .Mui-selected {
        color: ${({ theme }: GlobalTheme) => theme.colors.purple} !important;
    }

    .MuiTabs-indicator {
        background-color: ${({ theme }: GlobalTheme) => theme.colors.purple} !important;
    }

    .MuiPaper-root {
        background-color: ${({ theme }: GlobalTheme) => theme.background} !important;
    }

    .MuiTab-root.Mui-selected {
        background-color: ${({ theme }: GlobalTheme) => theme.backgroundSecondary} !important;
    }

`;
