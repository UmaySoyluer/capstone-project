import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

import Error from "@/components/Error";
import Heading from "@/components/Heading";
import Loading from "@/components/Loading";
import {
  AddTaskLink,
  BackLink,
  DeleteButton,
  EditLink,
} from "@/components/Buttons";
import TaskList from "@/components/TaskList";

const StyledDepartment = styled.h3`
  font-size: 0.9rem;
  margin-inline: 1rem;
  text-transform: uppercase;
  color: var(--color-brand-900);
`;

const StyledDescriptionList = styled.dl`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-inline: 1rem;
`;

const StyledDescriptionListTitle = styled.dt`
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--color-brand-900);
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const StyledToolBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledArticle = styled.article`
  margin-top: 1.5rem;
  padding-inline: 1rem;
`;

const StyledButtonAddContainer = styled.div`
  text-align: right;
  padding: 1rem;
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
        <BackLink href={"/"} />
        <StyledToolBar>
          <EditLink url={`/projects/${id}/edit`} />
          <DeleteButton handleClick={handleDelete} />
        </StyledToolBar>
      </StyledButtonContainer>
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
      <StyledArticle>
        <StyledDescriptionListTitle>Description</StyledDescriptionListTitle>
        <dd>{description}</dd>
      </StyledArticle>

      <TaskList id={id} tasks={project.tasks} />

      <StyledButtonAddContainer>
        <AddTaskLink url={`/projects/${id}/tasks/newTask`} />
      </StyledButtonAddContainer>
    </>
  );
}
