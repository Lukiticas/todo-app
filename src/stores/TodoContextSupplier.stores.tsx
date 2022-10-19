import { createContext } from "react";
import { DropResult } from "react-beautiful-dnd";

interface TCSProps {
  children: JSX.Element;
  values: todoContext;
}

interface todoContext {
  handleCreateTodo: (value: string) => void;
  handleRemoveCompletedItems: () => void;
  handleToggleDone: (id: string) => void;
  handleOnDragEnd: (value: DropResult) => void;
  handleDeleteTodo: (id: string) => void;
}

export const TodoContext = createContext<todoContext>({} as todoContext);

const TodoContextSupplier = ({ children, values }: TCSProps) => {
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContextSupplier;
