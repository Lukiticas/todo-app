import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global.styles";
import { createContext } from "react";

import useTheme from "../utils/useTheme.util";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

interface themeContext {
  toggleTheme: () => void;
}

export const ThemeSupplierContext = createContext<themeContext>(
  {} as themeContext
);

const ThemeSupplier = ({ children }: { children: JSX.Element }) => {
  const [theme, toggleTheme] = useTheme("todoTheme", {
    primary: dark,
    secundary: light,
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeSupplierContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeSupplierContext.Provider>
    </ThemeProvider>
  );
};

export default ThemeSupplier;
