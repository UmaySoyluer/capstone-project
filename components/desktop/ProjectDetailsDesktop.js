import styled from "styled-components";
import Heading from "@/components/Heading";

const StyledContainer = styled.div`
  height: 20vh;
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 1rem;
  justify-items: start;
  border: 1px solid var(--color-gray-300);
  border-radius: 10px;
  margin-inline: 1.5rem;
  background-color: var(--color-gray-100);
`;

const StyledDepartment = styled.h3`
  font-size: 0.9rem;
  margin-inline: 1rem;
  text-transform: uppercase;
  color: var(--color-brand-900);
`;

const StyledDescriptionList = styled.dl`
  margin-top: 1rem;
  padding-inline: 1rem;
`;

const StyledDescriptionListTitle = styled.dt`
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--color-brand-900);
`;

const StyledArticle = styled.article`
  grid-column: 1 / span 4;
  padding-inline: 1rem;
`;

export default function ProjectDetailsDesktop({ project }) {
  const { title, description, endDate, department, teamLead } = project;
  return (
    <StyledContainer>
      <div>
        <Heading>{title}</Heading>
        <StyledDepartment>{department}</StyledDepartment>
      </div>
      <div>
        <StyledDescriptionList>
          <div></div>
          <div>
            <StyledDescriptionListTitle>Team lead:</StyledDescriptionListTitle>
            <dd>{teamLead}</dd>
          </div>
        </StyledDescriptionList>
      </div>
      <div>
        <StyledDescriptionList>
          <div>
            <StyledDescriptionListTitle>Due date:</StyledDescriptionListTitle>
            <dd>{endDate}</dd>
          </div>
        </StyledDescriptionList>
      </div>
      <StyledArticle>
        <StyledDescriptionListTitle>Description:</StyledDescriptionListTitle>
        <dd>{description}</dd>
      </StyledArticle>
    </StyledContainer>
  );
}
