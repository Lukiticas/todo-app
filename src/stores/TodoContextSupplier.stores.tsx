import { createContext } from "react";
import { TodoActions } from "../interfaces";
interface TCSProps {
  children: JSX.Element;
  values: TodoActions;
}

const TodoContext = createContext<TodoActions>({} as TodoActions);

const TodoContextSupplier = ({ children, values }: TCSProps) => {
  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export { TodoContext };
export default TodoContextSupplier;
