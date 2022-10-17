import {
  HeaderIcon,
  HeaderIconCheck,
  HeaderInput,
  HeaderInputBody,
} from "./HeaderSearch.styles";
import IconCheck from "/images/icon-check.svg";
const HeaderSearch = () => {
  return (
    <HeaderInputBody>
      <HeaderIconCheck>
        <HeaderIcon src={IconCheck} alt="" />
      </HeaderIconCheck>
      <HeaderInput placeholder="Create a new Todo..." />
    </HeaderInputBody>
  );
};

export default HeaderSearch;
