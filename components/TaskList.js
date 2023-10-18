import useSWR from "swr";
import Error from "./Error";
import Task from "./Task";
import styled from "styled-components";

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
  return (
    <>
      <StyledContainer>
        <StyledHeading>Tasks</StyledHeading>
        {tasks ? (
          <StyledTaskList>
            {tasks?.length &&
              tasks.map((task) => <Task key={task._id} id={id} task={task} />)}
          </StyledTaskList>
        ) : (
          <p>No tasks found.</p>
        )}
      </StyledContainer>
    </>
  );
}
