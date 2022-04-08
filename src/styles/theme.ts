import { DefaultTheme } from "styled-components";

export interface GlobalTheme {
    theme: Theme;
}

export interface Theme extends DefaultTheme {
    background: string;
    text: string;
    textSecondary: string;
    border: string;
}

export const lightTheme = {
    background: '#FFFFFF',
    text: '#000000',
    textSecondary: '#706E6E',
    border: '#E5E5E5',
} as Theme;

export const darkTheme = {
    background: '#151D3B',
    text: '#FFFFFF',
    textSecondary: '#C4C4C4',
    border: '#21325E'
} as Theme;




