import { useContext, useState } from "react";
import { TodoContext } from "../../stores/TodoContextSupplier.stores";

import * as HI from "./HeaderSearch.styles";
import IconCheck from "/images/icon-check.svg";

const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const { handleCreateTodo } = useContext(TodoContext);

  const handleSubmitTodo = () => {
    if (searchValue.length <= 1) return;
    console.log("creating todo...");
    handleCreateTodo(searchValue);
    setSearchValue("");
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);
  };

  const handleSubmitWithKey = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.code !== "Enter" || event.key !== "Enter") return;
    handleSubmitTodo();
  };

  return (
    <HI.HeaderInputBody>
      <HI.HeaderIconCheck onClick={handleSubmitTodo}>
        <HI.HeaderIcon src={IconCheck} alt="" />
      </HI.HeaderIconCheck>
      <HI.HeaderInput
        onKeyDown={(e) => handleSubmitWithKey(e)}
        value={searchValue}
        onChange={handleChange}
        placeholder="Create a new Todo..."
      />
    </HI.HeaderInputBody>
  );
};

export default HeaderSearch;
