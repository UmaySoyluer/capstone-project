import Task from "./Task";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { AddTaskLink } from "./Buttons";

const StyledTaskList = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledContainer = styled.div`
  width: 100%;
  margin-inline: 1rem;
  margin-top: 2rem;
`;

const StyledCreateTask = styled.li`
  background-color: var(--color-brand-900);
  border-radius: 10px;
  color: var(--color-gray-50);

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

const StyledEmptyMessage = styled.p`
  margin-top: 2rem;
  text-align: center;
`;

const StyledListTitle = styled.select`
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--color-brand-900);
  border: none;
  background-color: var(--color-gray-50);

  &:hover {
    cursor: pointer;
  }
`;

const StyledDropdown = styled.option`
  font-size: 1rem;
  font-weight: normal;
  color: var(--color-brand-900);
  background: var(--color-gray-50);
`;

export default function TaskList({ id, tasks }) {
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    const defaultTasks = tasks?.filter((task) => task.tag === "Backlog");
    setSelectedTasks(defaultTasks);
  }, [tasks]);

  function handleChange(event) {
    const filteredTasks = tasks.filter(
      (task) => task.tag === event.target.value
    );
    setSelectedTasks(filteredTasks);
  }

  return (
    <StyledContainer>
      <StyledListTitle
        id="tags"
        name="tags"
        onChange={(event) => handleChange(event)}
      >
        <StyledDropdown value="Backlog">Backlog</StyledDropdown>
        <StyledDropdown value="Sprint Backlog">Sprint Backlog</StyledDropdown>
        <StyledDropdown value="In Progress">In Progress</StyledDropdown>
        <StyledDropdown value="Code Review">Code Review</StyledDropdown>
        <StyledDropdown value="Quality Assurance">
          Quality Assurance
        </StyledDropdown>
        <StyledDropdown value="Done">Done</StyledDropdown>
      </StyledListTitle>

      {selectedTasks?.length ? (
        <StyledTaskList>
          <StyledCreateTask key="new task">
            <AddTaskLink url={`/projects/${id}/tasks/newTask`} />
          </StyledCreateTask>
          {selectedTasks?.length &&
            selectedTasks?.map((task) => (
              <Task key={task._id} id={id} task={task} />
            ))}
        </StyledTaskList>
      ) : (
        <StyledTaskList>
          <StyledCreateTask key="new task">
            <AddTaskLink url={`/projects/${id}/tasks/newTask`} />
          </StyledCreateTask>
          <StyledEmptyMessage>No tasks found.</StyledEmptyMessage>
        </StyledTaskList>
      )}
    </StyledContainer>
  );
}
