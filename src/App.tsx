import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import usePersistedState from "./utils/UsePersistedState.util";

import { ThemeProvider } from "styled-components";
import {
  CancelTodoButton,
  CheckIcon,
  GlobalStyle,
  MainApp,
  MainContent,
  TodoCrossIcon,
  TodoIconCheck,
  TodoItemBody,
  TodoList,
} from "./styles/global.styles";

import Background from "./components/background/Background.component";
import Header from "./components/header/Header.component";
import MainFooter from "./components/main-footer/MainFooter.component";

import IconCheck from "/images/icon-check.svg";
import IconCross from "/images/icon-cross.svg";

const App = () => {
  const [theme, setTheme] = usePersistedState("todoTheme", dark);

  const toggleTheme = () => {
    setTheme((theme) => (theme.title === "dark" ? light : dark));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <MainApp>
          <Background />
          <Header themeToggle={toggleTheme} />
          <MainContent>
            <TodoList>
              <TodoItemBody>
                <TodoIconCheck>
                  <CheckIcon src={IconCheck} alt="" />
                </TodoIconCheck>
                <p>Complete online javascript crouse</p>
                <CancelTodoButton>
                  <TodoCrossIcon src={IconCross} alt="" />
                </CancelTodoButton>
              </TodoItemBody>
            </TodoList>
            <MainFooter
              itemsRemaining={5}
              handleFilter={(el) => {}}
              handleClear={() => {}}
            />
          </MainContent>
        </MainApp>
      </>
    </ThemeProvider>
  );
};

export default App;
