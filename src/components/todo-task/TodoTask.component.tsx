import { Draggable } from "react-beautiful-dnd";
import { useContext } from "react";

import { TodoTaskProps } from "../../interfaces";
import { TodoContext } from "../../stores/TodoContextSupplier.stores";

import * as TT from "./TodoTask.styles";
import IconCheck from "/images/icon-check.svg";
import IconCross from "/images/icon-cross.svg";

const TodoTask = (props: TodoTaskProps) => {
  const { id, idx, isDone, payload } = props;
  const { handleToggleDone, handleDeleteTodo } = useContext(TodoContext);

  return (
    <Draggable key={id} draggableId={id} index={idx}>
      {(provided) => (
        <TT.TaskBody
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          data-done={isDone}
        >
          <TT.TaskIconBody onClick={() => handleToggleDone(id)}>
            <TT.TaskIcon src={IconCheck} alt="" />
          </TT.TaskIconBody>
          <TT.TaskMessage>{payload}</TT.TaskMessage>
          <TT.TaskClearButton onClick={() => handleDeleteTodo(id)}>
            <TT.TaskClearButtonIcon src={IconCross} alt="" />
          </TT.TaskClearButton>
        </TT.TaskBody>
      )}
    </Draggable>
  );
};

export default TodoTask;
