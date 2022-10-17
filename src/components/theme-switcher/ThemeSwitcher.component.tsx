import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeSwitcherIcon, ThemeSwitcherButton } from "./ThemeSwitcher.styles";

import moonIcon from "/images/icon-moon.svg";
import sunIcon from "/images/icon-sun.svg";

interface ThemeProps {
  themeToggle: () => void;
}

const ThemeSwitcher = ({ themeToggle }: ThemeProps) => {
  const { title } = useContext(ThemeContext);

  return (
    <ThemeSwitcherButton title="theme switcher">
      <ThemeSwitcherIcon
        src={title === "dark" ? sunIcon : moonIcon}
        alt=""
        onClick={themeToggle}
      />
    </ThemeSwitcherButton>
  );
};

export default ThemeSwitcher;
