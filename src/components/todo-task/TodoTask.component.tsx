import { ReactComponentElement, ReactElement, Ref } from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  TaskBody,
  TaskClearButton,
  TaskClearButtonIcon,
  TaskIcon,
  TaskIconBody,
  TaskMessage,
} from "./TodoTask.styles";

import IconCheck from "/images/icon-check.svg";
import IconCross from "/images/icon-cross.svg";

interface TodoTaskProps {
  payload: string;
  id: string;
  idx: number;
  isDone: boolean;
  handleDelete: (value: string) => void;
  handleToggleDone: (id: string) => void;
}

const TodoTask = ({
  id,
  idx,
  isDone,
  payload,
  handleDelete,
  handleToggleDone,
}: TodoTaskProps) => {
  return (
    <Draggable key={id} draggableId={id} index={idx}>
      {(provided) => (
        <TaskBody
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          data-done={isDone}
        >
          <TaskIconBody onClick={() => handleToggleDone(id)}>
            <TaskIcon src={IconCheck} alt="" />
          </TaskIconBody>
          <TaskMessage>{payload}</TaskMessage>
          <TaskClearButton onClick={() => handleDelete(id)}>
            <TaskClearButtonIcon src={IconCross} alt="" />
          </TaskClearButton>
        </TaskBody>
      )}
    </Draggable>
  );
};

export default TodoTask;
