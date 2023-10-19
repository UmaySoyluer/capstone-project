import styled from "styled-components";
import Link from "next/link";

export default function Task({ task, id }) {
  if (!task) return;

  const { _id: taskId, title } = task;

  const StyledListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    background-color: var(--color-brand-900);
    border-radius: 10px;
    color: var(--color-gray-50);

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

  return (
    <StyledListItem>
      <StyledListItemLink href={`/projects/${id}/tasks/${taskId}`}>
        {title}
      </StyledListItemLink>
    </StyledListItem>
  );
}
