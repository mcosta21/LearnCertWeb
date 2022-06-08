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

    *::-webkit-scrollbar {
        width: 23px;
    }


    *::-webkit-scrollbar-thumb {
        background: ${({ theme }: GlobalTheme) => theme.border};
        border-radius: 12px;
        width: 3px;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        background-clip: padding-box;
    }

    *::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }: GlobalTheme) => theme.colors.purple};
        width: 3px;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        background-clip: padding-box;
    }

    .MuiTab-root {
        border-bottom: 1px solid ${({ theme }: GlobalTheme) => theme.border} !important;
        min-height: 50px !important;
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

    .MuiIconButton-root {
        border: 1px solid ${({ theme }: GlobalTheme) => theme.border} !important;
    }

    .Mui-disabled {
        pointer-events: all !important;
        cursor: not-allowed !important;
    }

    .MuiButton-containedPrimary {
        background-color: ${({ theme }: GlobalTheme) => theme.colors.purple} !important;
        padding: 6px 20px !important;
        font-weight: 500 !important;
    }

`;
