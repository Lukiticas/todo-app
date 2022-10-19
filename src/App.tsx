import { nanoid } from "nanoid";
import { useState } from "react";

import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

import { ThemeProvider } from "styled-components";
import {
  Footer,
  GlobalStyle,
  MainApp,
  MainContent,
} from "./styles/global.styles";

import Background from "./components/background/Background.component";
import Header from "./components/header/Header.component";
import MainFooter from "./components/main-footer/MainFooter.component";
import TodoList from "./components/todo-list/TodoList.component";

import { DropResult } from "react-beautiful-dnd";
import useTheme from "./utils/useTheme.util";
export interface Todo {
  payload: string;
  id: string;
  isDone: boolean;
}

const todosItems: Todo[] = [
  { payload: "Jog around the park", id: nanoid(), isDone: true },
  { payload: "10 minutes meditation", id: nanoid(), isDone: false },
  { payload: "Read for 1 hour", id: nanoid(), isDone: false },
  { payload: "Pick up groceries", id: nanoid(), isDone: false },
  {
    payload: "Complete Todo App on Frontend Mentor",
    id: nanoid(),
    isDone: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(todosItems);
  const [filterValue, setFilterValue] = useState("all");

  const [theme, toggleTheme] = useTheme("todoTheme", {
    primary: dark,
    secundary: light,
  });

  const filteredTodos = todos.filter((el) => {
    switch (filterValue) {
      case "active":
        return el.isDone === false;
      case "completed":
        return el.isDone === true;
      default:
        return el.isDone === el.isDone;
    }
  });

  const handleRemoveCompletedItems = () => {
    setTodos((prevTodos) => {
      return prevTodos.filter((el) => !el.isDone);
    });
  };

  const handleToggleDone = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((el) =>
        el.id === id ? { ...el, isDone: !el.isDone } : el
      );
    });
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };

  const handleOnDragEnd = (value: DropResult) => {
    if (!value.destination) return;

    setTodos((prevTodos) => {
      let newTodos = Array.from(prevTodos);
      const [reorderedData] = newTodos.splice(value.source.index, 1);
      newTodos.splice(value.destination!.index, 0, reorderedData);

      return newTodos;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <MainApp>
          <Background />
          <Header themeToggle={toggleTheme} />
          <MainContent>
            <TodoList
              handleOnDragEnd={handleOnDragEnd}
              handleDelete={handleDelete}
              handleToggleDone={handleToggleDone}
              listOfTodos={filteredTodos}
            />
            <MainFooter
              itemsRemaining={filteredTodos.length}
              filterValue={filterValue}
              setFilterValue={setFilterValue}
              handleClear={handleRemoveCompletedItems}
            />
          </MainContent>
          <Footer>
            <p>Drag and drop to reorder list</p>
          </Footer>
        </MainApp>
      </>
    </ThemeProvider>
  );
};

export default App;
