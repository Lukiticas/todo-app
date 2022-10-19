import { DefaultTheme } from "styled-components";
import usePersistedState from "./UsePersistedState.util";

interface themes {
  primary: DefaultTheme;
  secundary: DefaultTheme;
}

const useTheme = (
  themeTitle: string,
  themes: themes
): [DefaultTheme, () => void] => {
  const [theme, setTheme] = usePersistedState(themeTitle, themes.primary);

  const toggleTheme = () => {
    setTheme(
      theme.title === themes.primary.title ? themes.secundary : themes.primary
    );
  };

  return [theme, toggleTheme];
};

export default useTheme;
