import styled from "styled-components";
import Heading from "@/components/Heading";

const StyledDetailsMobile = styled.div`
  margin-top: 10vh;
  padding-inline: 2.5rem;
  margin-bottom: 1.5rem;
`;

const StyledDepartment = styled.h3`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: var(--color-brand-900);
`;

const StyledDescriptionList = styled.dl`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledDescriptionListTitle = styled.dt`
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--color-brand-900);
`;

export default function ProjectDetailsMobile({ project }) {
  const { title, endDate, department, teamLead } = project;
  return (
    <StyledDetailsMobile>
      <Heading>{title}</Heading>
      <StyledDepartment>{department}</StyledDepartment>
      <StyledDescriptionList>
        <div>
          <StyledDescriptionListTitle>Team lead:</StyledDescriptionListTitle>
          <dd>{teamLead}</dd>
        </div>

        <div>
          <StyledDescriptionListTitle>Due date:</StyledDescriptionListTitle>
          <dd>{endDate}</dd>
        </div>
      </StyledDescriptionList>
    </StyledDetailsMobile>
  );
}
