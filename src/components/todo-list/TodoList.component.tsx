import { useContext } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { TodoListProps } from "../../interfaces";

import TodoTask from "../todo-task/TodoTask.component";
import { TodoContext } from "../../stores/TodoContextSupplier.stores";
import { TodoListBody } from "./TodoList.styles";

const TodoList = ({ listOfTodos }: TodoListProps) => {
  const { handleOnDragEnd } = useContext(TodoContext);

  const todoElements = listOfTodos.map((el, idx) => (
    <TodoTask idx={idx} key={el.id} {...el} />
  ));

  return (
    <DragDropContext onDragEnd={(e) => handleOnDragEnd(e)}>
      <Droppable droppableId="listTodos">
        {(provided) => (
          <TodoListBody {...provided.droppableProps} ref={provided.innerRef}>
            {todoElements}
            {provided.placeholder}
          </TodoListBody>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TodoList;
