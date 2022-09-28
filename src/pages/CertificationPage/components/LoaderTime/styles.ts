import styled from 'styled-components';
import { GlobalTheme } from '@styles/theme';

export const SContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const SLoaderContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    > .timer {
        font-size: 3rem;
        font-weight: 600;
        position: absolute;
    }
` 

const size = 120;
const duration = 3.1;

export const SLoader = styled.div`
    display: block;
    height: ${size}px;
    width: ${size}px;
    -webkit-animation: loader-2-1 ${duration}s linear infinite;
    animation: loader-2-1 ${duration}s linear infinite;
    
    @-webkit-keyframes loader-2-1 {
        0%   { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes loader-2-1 {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    & span {
        display: block;
        position: absolute;
        top: 0; left: 0;
        bottom: 0; right: 0;
        margin: auto;
        height: ${size}px;
        width: ${size}px;
        clip: rect(${size/2}px, ${size}px, ${size}px, 0);
        -webkit-animation: loader-2-2 ${duration/2}s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
        animation: loader-2-2 ${duration/2}s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
    }

    @-webkit-keyframes loader-2-2 {
        0%   { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes loader-2-2 {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    & span::before {
        content: "";
        display: block;
        position: absolute;
        top: 0; left: 0;
        bottom: 0; right: 0;
        margin: auto;
        height: ${size}px;
        width: ${size}px;
        border: 3px solid transparent;
        border-top: 3px solid ${({ theme }: GlobalTheme) => theme.border};
        border-radius: 50%;
        -webkit-animation: loader-2-3 ${duration/2}s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
        animation: loader-2-3 ${duration/2}s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
    }

    @-webkit-keyframes loader-2-3 {
        0%   { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes loader-2-3 {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    & span::after {
        content: "";
        display: block;
        position: absolute;
        top: 0; left: 0;
        bottom: 0; right: 0;
        margin: auto;
        height: ${size}px;
        width: ${size}px;
        border: 3px solid ${({ theme }: GlobalTheme) => theme.colors.purple};
        border-radius: 50%;
    }

`
