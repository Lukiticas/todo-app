import { useState } from "react";
import { DropResult } from "react-beautiful-dnd";
import { nanoid } from "nanoid";

import TodoContextSupplier from "./stores/TodoContextSupplier.stores";
import ThemeSupplier from "./stores/ThemeSupplier.stores";

import usePersistedState from "./utils/UsePersistedState.util";
import { todosItems } from "./utils/InitialTodos.util";

import { Background, Header, MainFooter, TodoList } from "./components";
import * as A from "./styles/global.styles";

const App = () => {
  const [todos, setTodos] = usePersistedState("todoItems", todosItems);
  const [filterValue, setFilterValue] = useState("all");

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

  const handleDeleteTodo = (id: string) => {
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

  const handleCreateTodo = (value: string) => {
    const newTodo = { payload: value, id: nanoid(), isDone: false };
    setTodos((oldTodos) => [newTodo, ...oldTodos]);
  };

  const filteredTodos = todos.filter((el) => {
    switch (filterValue) {
      case "active":
        return el.isDone === false;
      case "completed":
        return el.isDone === true;
      case "all":
        return el.isDone === el.isDone;
      default:
        return el.isDone === el.isDone;
    }
  });

  return (
    <ThemeSupplier>
      <TodoContextSupplier
        values={{
          handleRemoveCompletedItems,
          handleCreateTodo,
          handleOnDragEnd,
          handleToggleDone,
          handleDeleteTodo,
        }}
      >
        <A.MainApp>
          <Background />
          <Header />
          <A.MainContent>
            <TodoList listOfTodos={filteredTodos} />
            <MainFooter
              itemsRemaining={filteredTodos.length}
              handleQuery={{ query: filterValue, setQuery: setFilterValue }}
              handleClear={handleRemoveCompletedItems}
            />
          </A.MainContent>
          <A.Footer>
            <p>Drag and drop to reorder list</p>
          </A.Footer>
        </A.MainApp>
      </TodoContextSupplier>
    </ThemeSupplier>
  );
};

export default App;
