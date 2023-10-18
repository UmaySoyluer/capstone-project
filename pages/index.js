import ProjectList from "@/components/ProjectList";
import Link from "next/link";
import styled from "styled-components";

const StyledMainHeadline = styled.h1`
  margin-block: 1rem;
  margin-inline: 1.5rem;
  text-align: center;
  color: var(--color-brand-900);
`;

export default function ProjectsOverviewPage() {
  return (
    <>
      <StyledMainHeadline>Project Overview</StyledMainHeadline>
      <ProjectList />
    </>
  );
}
