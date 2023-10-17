import styled from "styled-components";

export default function Task({ task }) {
  if (!task) return;

  const { _id: id, title } = task;

  const StyledListItem = styled.li`
    background: #fff;
    border-radius: 0.3rem;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    text-align: center;
    padding: 0.3rem;
    margin: 0.5rem;
    color: #374151;

    &:hover {
      border: 2px solid #3b82f6;
    }
  `;

  return (
    <StyledListItem>
      <p>{title}</p>
    </StyledListItem>
  );
}
