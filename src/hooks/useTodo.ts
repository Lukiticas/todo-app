import { useTodo } from "./../interfaces/index";
import { DropResult } from "react-beautiful-dnd";
import { nanoid } from "nanoid";

import todosItems from "../utils/InitialTodos.util";
import usePersistedState from "../utils/UsePersistedState.util";

const useTodo = (filterValue: string): useTodo => {
  const [todos, setTodos] = usePersistedState("todoItems", todosItems);

  const handleCreateTodo = (value: string) => {
    const newTodo = { payload: value, id: nanoid(), isDone: false };
    setTodos((oldTodos) => [newTodo, ...oldTodos]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((el) => el.id !== id));
  };

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

  const handleOnDragEnd = (value: DropResult) => {
    if (!value.destination) return;

    setTodos((prevTodos) => {
      let newTodos = Array.from(prevTodos);
      const [reorderedData] = newTodos.splice(value.source.index, 1);
      newTodos.splice(value.destination!.index, 0, reorderedData);

      return newTodos;
    });
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

  return {
    todos: filteredTodos,
    actions: {
      handleCreateTodo,
      handleDeleteTodo,
      handleToggleDone,
      handleRemoveCompletedItems,
      handleOnDragEnd,
    },
  };
};

export default useTodo;
