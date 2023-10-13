import useSWR from "swr";
import styled from "styled-components";
import { HiPlus } from "react-icons/hi2";

import Project from "./Project";
import Error from "@/components/Error";
import { StyledLink } from "@/components/Project";
import { StyledArticle } from "@/components/Project";
import { StyledListItem } from "@/components/Project";

const StyledProjectsList = styled.ul`
  display: grid;
  grid-template-columns: 40% 40%;
  box-sizing: border-box;
  gap: 1.3rem;
  place-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-inline: auto;
`;

export default function ProjectList() {
  const { data: projects, isLoading, error } = useSWR("/api/projects");

  if (isLoading) {
    return <h2>Loading ... </h2>;
  }
  if (error) {
    return <Error message={error.message} />;
  }
  return (
    <>
      {projects ? (
        <StyledProjectsList>
          <StyledListItem>
            <StyledLink href={"/projects/new"}>
              <StyledArticle>
                <HiPlus size={22} title="create new project" />
              </StyledArticle>
            </StyledLink>
          </StyledListItem>

          {projects?.length &&
            projects.map((project) => (
              <Project key={project._id} project={project} />
            ))}
        </StyledProjectsList>
      ) : (
        <p>No projects found.</p>
      )}
    </>
  );
}
