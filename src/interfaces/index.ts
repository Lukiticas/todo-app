import { DefaultTheme } from "styled-components";
import { DropResult } from "react-beautiful-dnd";
export interface Todo {
  payload: string;
  id: string;
  isDone: boolean;
}

export interface Filter {
  name: string;
  isPartOf: string;
}

export interface FilterProps {
  filters: Filter[];
  handleQuery: {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  };
}

export interface MainFooterProps {
  itemsRemaining: number | string;
  handleClear: () => void;
  handleQuery: {
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
  };
}

export interface TodoTaskProps {
  payload: string;
  id: string;
  idx: number;
  isDone: boolean;
}

export interface TodoListProps {
  listOfTodos: Todo[];
}

export interface TodoActions {
  handleCreateTodo: (value: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleRemoveCompletedItems: () => void;
  handleToggleDone: (id: string) => void;
  handleOnDragEnd: (value: DropResult) => void;
}

export interface useTodo {
  todos: Todo[];
  actions: TodoActions;
}
export interface themes {
  primary: DefaultTheme;
  secundary: DefaultTheme;
}
