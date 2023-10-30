import Link from "next/link";
import useSWR from "swr";
import styled from "styled-components";
import { HiPlus } from "react-icons/hi2";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import Project from "./Project";
import Error from "@/components/Error";
import { StyledArticle } from "@/components/Project";
import { StyledListItem } from "@/components/Project";
import Loading from "./Loading";

const StyledProjectsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-inline: 1.5rem;
`;

export default function ProjectList() {
  const router = useRouter();
  const { data: session } = useSession();
  if (!session) {
    router.push("/Users");
  }

  const { data: projects, isLoading, error } = useSWR("/api/projects");

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error.message} />;
  }
  return (
    <>
      {projects ? (
        <StyledProjectsList>
          <StyledListItem>
            <Link href={"/projects/new"}>
              <StyledArticle>
                <HiPlus
                  size={32}
                  style={{ color: "var(--color-gray-50)" }}
                  title="create new project"
                />
              </StyledArticle>
            </Link>
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
