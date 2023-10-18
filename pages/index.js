import ProjectList from "@/components/ProjectList";
import styled from "styled-components";

const StyledMainHeadline = styled.h1`
  margin-block: 1rem;
  text-align: center;
`;

export default function ProjectsOverviewPage() {
  return (
    <>
      <StyledMainHeadline>Project Overview</StyledMainHeadline>
      <ProjectList />
    </>
  );
}
