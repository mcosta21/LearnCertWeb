import { Fragment, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppRoutes } from './routes'

import { light, dark } from "./styles/theme";
import GlobalTheme from "./styles/GlobalStyle";
import styled from "styled-components";

function App() {
  
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Fragment>
        <h1>{theme}</h1>
        <button onClick={toggleTheme}>Mudar tema</button>
        <AppRoutes />
        <GlobalTheme />
      </Fragment>
    </ThemeProvider>)
}

const ButtonChange = styled.button`
  width: 100px;
  height: 40px;
  margin-right: 20px;
  border-radius: 10px;
`;

export default App;
