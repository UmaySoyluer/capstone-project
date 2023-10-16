import Link from "next/link";
import styled from "styled-components";

export const StyledListItem = styled.li`
  list-style-type: none;
`;

export const StyledArticle = styled.article`
  width: 120px;
  height: 150px;
  display: grid;
  place-items: center;
`;

export const StyledLink = styled(Link)`
  background: var(--blue-300);
  border-radius: 2rem;
  text-decoration: none;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  display: block;

  &:hover {
    background-color: white;
  }
`;

const StyledTitle = styled.h3`
  font-size: 0.8rem;
`;

export default function Project({ project }) {
  if (!project) return;

  const { _id: id, title } = project;

  return (
    <StyledListItem>
      <StyledLink href={`/projects/${id}`}>
        <StyledArticle>
          <StyledTitle>{title}</StyledTitle>
        </StyledArticle>
      </StyledLink>
    </StyledListItem>
  );
}
