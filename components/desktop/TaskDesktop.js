import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import TaskDetailModal from "../modals/TaskDetailModal";

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 3rem;
  background-color: var(--color-brand-900);
  border-radius: 10px;
  color: var(--color-gray-50);
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

export default function TaskDesktop({ task, id: projectId }) {
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
      <StyledListItem onClick={openModal}>{title}</StyledListItem>
      {showModal && <TaskDetailModal task={task} onClose={closeModal} />}
    </>
  );
}
