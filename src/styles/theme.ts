import { DefaultTheme } from "styled-components";

export interface GlobalTheme {
    theme: Theme;
}

interface Colors {
    purple: string;
    red: string;
    green: string;
    white: string;
}

export interface Theme extends DefaultTheme {
    background: string;
    backgroundSecondary: string;
    backgroundDark: string;
    text: string;
    textSecondary: string;
    border: string;
    colors: Colors;
    shadow: string;
}

const colorsTheme = {
    purple: '#5902EC',
    red: '#D82148',
    green: '#65C18C',
    white: '#FFF'
} as Colors;

export const lightTheme = {
    background: '#f5f5f5',
    backgroundSecondary: '#FFF',
    backgroundDark: '#f7f7f7',
    text: '#000000',
    textSecondary: '#706E6E',
    border: '#E5E5E5',
    colors: colorsTheme,
    shadow: '#e6e6e6'
} as Theme;

export const darkTheme = {
    background: '#101835',
    backgroundSecondary: '#151D3B',
    backgroundDark: '#070f2a',
    text: '#FFFFFF',
    textSecondary: '#C4C4C4',
    border: '#21325E',
    colors: colorsTheme,
    shadow: '#0c132a'
} as Theme;




