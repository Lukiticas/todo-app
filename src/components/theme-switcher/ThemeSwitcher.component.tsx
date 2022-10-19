import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeSupplierContext } from "../../stores/ThemeSupplier.stores";
import * as TS from "./ThemeSwitcher.styles";

import moonIcon from "/images/icon-moon.svg";
import sunIcon from "/images/icon-sun.svg";

const ThemeSwitcher = () => {
  const { title } = useContext(ThemeContext);
  const { toggleTheme } = useContext(ThemeSupplierContext);

  return (
    <TS.ThemeSwitcherButton title="theme switcher">
      <TS.ThemeSwitcherIcon
        src={title === "dark" ? sunIcon : moonIcon}
        alt=""
        onClick={toggleTheme}
      />
    </TS.ThemeSwitcherButton>
  );
};

export default ThemeSwitcher;
