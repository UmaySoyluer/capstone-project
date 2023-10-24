import styled from "styled-components";
import { lists } from "@/utils/lists";

import TaskDesktop from "./TaskDesktop";
import { useState } from "react";
import TaskFormModal from "../modals/TaskFormModal";
import useWindowDimensions from "@/hooks/useWindowDimensions";

const StyledContainer = styled.div`
  padding-block: 1rem;
  padding-inline: 1.5rem;
  width: 100%;
  height: 70vh;

  display: flex;
  overflow: auto;
  gap: 1rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding-block: 0.5rem;
  background-color: var(--color-gray-100);
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0 5px 5px rgba(0, 0, 0, 0.2);
`;

const StyledTaskList = styled.ul`
  min-width: 400px;
  height: 60vh;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: auto;
`;

const StyledListTitle = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--color-brand-900);
`;

const StyledCreate = styled.button`
  width: 90%;
  height: 3rem;
  margin-top: 1rem;
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-500);
  border-radius: 10px;
  color: var(--color-gray-900);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  &:hover {
    background-color: var(--color-gray-200);
  }
`;

export default function TaskListDesktop({ tasks }) {
  const { width } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);
  const [tag, setTag] = useState("");

  if (width <= 810) return setShowModal(false);

  function openModal(list) {
    setShowModal(true);
    setTag(list);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <StyledContainer>
        {lists.map((list) => (
          <StyledWrapper key={list}>
            <StyledListTitle>{list}</StyledListTitle>
            <StyledTaskList>
              {tasks.filter((task) => list === task.tag).length > 0 ? (
                tasks
                  .filter((task) => list === task.tag)
                  .map((task) => <TaskDesktop key={task._id} task={task} />)
              ) : (
                <>
                  <p>No tasks found...</p>
                </>
              )}
            </StyledTaskList>

            <StyledCreate type="button" onClick={() => openModal(list)}>
              Add task
            </StyledCreate>
          </StyledWrapper>
        ))}
      </StyledContainer>
      {showModal && <TaskFormModal onClose={closeModal} list={tag} />}
    </>
  );
}
