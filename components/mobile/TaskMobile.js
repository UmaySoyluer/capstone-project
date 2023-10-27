import styled from "styled-components";
import Link from "next/link";

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: var(--color-brand-900);
  border-radius: 10px;
  color: var(--color-gray-50);
  transition: 0.3s;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

const StyledListItemLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
`;

export default function TaskMobile({ task, id }) {
  if (!task) return;

  const { _id: taskId, title } = task;

  return (
    <StyledListItem>
      <StyledListItemLink href={`/projects/${id}/tasks/${taskId}`}>
        {title}
      </StyledListItemLink>
    </StyledListItem>
  );
}
