import TaskMobile from "./TaskMobile";
import styled from "styled-components";
import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import { AddTaskLink } from "../Buttons";

const StyledContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 5rem;
  padding-inline: 2.5rem;
`;

const StyledTaskList = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledCreateTask = styled.li`
  width: 100%;

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

export default function TaskListMobile({ id, tasks }) {
  const [selectedTasks, setSelectedTasks] = useLocalStorageState("tasks", []);
  const [selectedTag, setSelectedTag] = useLocalStorageState("tag", "Backlog");

  useEffect(() => {
    const defaultTasks = tasks?.filter((task) => task.tag === selectedTag);
    setSelectedTasks(defaultTasks);
  }, [tasks, setSelectedTasks, selectedTag]);

  function handleChange(event) {
    const filteredTasks = tasks.filter(
      (task) => task.tag === event.target.value
    );
    setSelectedTasks(filteredTasks);
    setSelectedTag(event.target.value);
  }

  return (
    <StyledContainer>
      <StyledListTitle
        id="tags"
        name="tags"
        onChange={(event) => handleChange(event)}
        value={selectedTag}
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
              <TaskMobile key={task._id} id={id} task={task} />
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
