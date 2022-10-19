import HeaderSearch from "../header-search/HeaderSearch.component";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher.component";
import * as H from "./Header.styles";

const Header = () => {
  return (
    <H.HeaderBody>
      <H.HeaderBar>
        <h1>TODO</h1>
        <ThemeSwitcher />
      </H.HeaderBar>
      <HeaderSearch />
    </H.HeaderBody>
  );
};

export default Header;
