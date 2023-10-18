import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

import Error from "@/components/Error";
import Heading from "@/components/Heading";
import { BackLink, DeleteButton, EditLink } from "@/components/Buttons";
import Loading from "@/components/Loading";

const StyledDepartment = styled.h3`
  font-size: 0.9rem;
  margin-inline: 1rem;
  text-transform: uppercase;
  color: var(--color-brand-900);
`;

const StyledSectionTitle = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--color-brand-900);
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

const StyledToolBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledSection = styled.section`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-inline: 1rem;
`;

const StyledArticle = styled.article`
  margin-top: 1.5rem;
  padding-inline: 1rem;
`;

export default function ProjectDetailPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: project, isLoading, error } = useSWR(`/api/projects/${id}`);

  if (!isReady || isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const { title, description, endDate, department, teamLead } = project;

  async function handleDelete() {
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    router.push("/");
  }

  return (
    <>
      <StyledButtonContainer>
        <BackLink />
        <StyledToolBar>
          <EditLink url={`/projects/${id}/edit`} />
          <DeleteButton handleClick={handleDelete} />
        </StyledToolBar>
      </StyledButtonContainer>
      <Heading>{title}</Heading>
      <StyledDepartment>{department}</StyledDepartment>
      <StyledSection>
        <div>
          <StyledSectionTitle>Team lead:</StyledSectionTitle>
          <p>{teamLead}</p>
        </div>
        <div>
          <StyledSectionTitle>Due date:</StyledSectionTitle>
          <p>{endDate}</p>
        </div>
      </StyledSection>
      <StyledArticle>
        <StyledSectionTitle>Description</StyledSectionTitle>
        <p>{description}</p>
      </StyledArticle>
    </>
  );
}
