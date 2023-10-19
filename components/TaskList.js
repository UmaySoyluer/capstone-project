import Task from "./Task";
import styled from "styled-components";
import { useState } from "react";

const StyledTaskList = styled.ul`
  width: 90%;
  box-sizing: border-box;
  margin: 0 auto;
`;

const StyledHeading = styled.h3`
  display: flex;
  justify-content: center;
  margin: 1rem auto;
  color: #374151;
`;
const StyledContainer = styled.div`
  width: 80%;
  min-height: 20rem;
  border: 1px solid #f3f4f6;
  border-radius: 0.3rem;
  background: #f3f4f6;
  margin: 2rem auto;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;
export default function TaskList({ id, tasks }) {
  const defaultTasks = tasks?.filter((task) => task.tag === "Backlog");

  const [selectedTasks, setSelectedTasks] = useState(defaultTasks);

  function handleChange(event) {
    const filteredTasks = tasks.filter(
      (task) => task.tag === event.target.value
    );
    setSelectedTasks(filteredTasks);
  }

  return (
    <>
      <select id="tags" name="tags" onChange={(event) => handleChange(event)}>
        <option value="Backlog">Backlog</option>
        <option value="Sprint Backlog">Sprint Backlog</option>
        <option value="In Progress">In Progress</option>
        <option value="Code Review">Code Review</option>
        <option value="Quality Assurance">Quality Assurance</option>
        <option value="Done">Done</option>
      </select>
      <StyledContainer>
        <StyledHeading>Tasks</StyledHeading>
        {selectedTasks.length ? (
          <StyledTaskList>
            {selectedTasks?.length &&
              selectedTasks.map((task) => (
                <Task key={task._id} id={id} task={task} />
              ))}
          </StyledTaskList>
        ) : (
          <p>No tasks found.</p>
        )}
      </StyledContainer>
    </>
  );
}
