import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme, lightTheme, darkTheme } from "@styles/theme";
import GlobalTheme from '@styles/GlobalStyle';

interface CustomThemeProviderData {
	children: ReactNode;
}

interface CustomThemeContextData { 
	theme: Theme;
	toggleTheme: () => void;
	themeName: ThemeName;
}

type ThemeName = 'light' | 'dark';

export const CustomThemeContext = createContext({} as CustomThemeContextData);

export function CustomThemeProvider ({children} : CustomThemeProviderData) {

	const [themeName, setThemeName] = useState<ThemeName>('dark');
	const [theme, setTheme] = useState<Theme>(darkTheme);

	function toggleTheme() {
		if (themeName === 'dark') {
			localStorage.setItem('LearnCert_Theme', 'light');
			setThemeName('light');
		} 
		else {
			localStorage.setItem('LearnCert_Theme', 'dark');
			setThemeName('dark');
		}
		
	}

	useEffect(() => {
		const localStorageTheme = localStorage.getItem('LearnCert_Theme');
		if(localStorageTheme && localStorageTheme === 'light') {
			setThemeName('light');
		}
		else {
			setThemeName('dark');
		}
	}, []);

	useEffect(() => {
		setTheme(themeName === 'light' ? lightTheme : darkTheme);
	}, [themeName]);

	return (
		<CustomThemeContext.Provider value={{ theme, toggleTheme, themeName }}>
			<ThemeProvider theme={theme}>
				{children}
                <GlobalTheme />
			</ThemeProvider>
		</CustomThemeContext.Provider>
	);
}