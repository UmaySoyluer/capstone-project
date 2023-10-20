import Link from "next/link";
import styled from "styled-components";

export const StyledListItem = styled.li`
  background-color: var(--color-brand-900);
  color: var(--color-gray-50);
  list-style-type: none;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const StyledArticle = styled.article`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-inline: 0.5rem;
`;

const StyledTitle = styled.h3`
  font-size: 0.8rem;
`;

export default function Project({ project }) {
  if (!project) return;

  const { _id: id, title } = project;

  return (
    <StyledListItem>
      <Link href={`/projects/${id}`}>
        <StyledArticle>
          <StyledTitle>{title}</StyledTitle>
        </StyledArticle>
      </Link>
    </StyledListItem>
  );
}
