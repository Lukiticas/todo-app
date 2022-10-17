import HeaderSearch from "../header-search/HeaderSearch.component";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher.component";
import { HeaderBar, HeaderBody } from "./Header.styles";

interface HeaderProps {
  themeToggle: () => void;
}

const Header = ({ themeToggle }: HeaderProps) => {
  return (
    <HeaderBody>
      <HeaderBar>
        <h1>TODO</h1>
        <ThemeSwitcher themeToggle={themeToggle} />
      </HeaderBar>
      <HeaderSearch />
    </HeaderBody>
  );
};

export default Header;
