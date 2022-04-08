import { CustomThemeContext } from './../contexts/CustomThemeProvider';
import { useContext } from 'react';

export const useMyTheme = () =>  useContext(CustomThemeContext);