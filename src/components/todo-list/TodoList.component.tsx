import { Todo } from "../../App";
import TodoTask from "../todo-task/TodoTask.component";
import { TodoListBody } from "./TodoList.styles";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

interface TodoListProps {
  listOfTodos: Todo[];
  handleDelete: (value: string) => void;
  handleToggleDone: (id: string) => void;
  handleOnDragEnd: (event: DropResult) => void;
}

const TodoList = ({
  listOfTodos,
  handleDelete,
  handleToggleDone,
  handleOnDragEnd,
}: TodoListProps) => {
  const todoElements = listOfTodos.map((el, idx) => (
    <TodoTask
      idx={idx}
      key={el.id}
      handleDelete={handleDelete}
      handleToggleDone={handleToggleDone}
      {...el}
    />
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
