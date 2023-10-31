import styled from "styled-components";
import { useState } from "react";
import TaskDetailModal from "./modals/TaskDetailModal";

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-height: 2.5rem;
  background-color: var(--color-brand-900);
  border-radius: 10px;
  color: var(--color-gray-50);
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--color-brand-700);
    outline: none;
  }
`;

export default function Task({ task, id: projectId, innerRef, provided }) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  const { _id: taskId, title } = task;

  return (
    <>
      <StyledListItem
        role="button"
        tabIndex="0"
        onClick={openModal}
        ref={innerRef}
        {...provided.dragHandleProps}
        {...provided.draggableProps}
      >
        {title}
      </StyledListItem>
      {showModal && <TaskDetailModal task={task} onClose={closeModal} />}
    </>
  );
}
