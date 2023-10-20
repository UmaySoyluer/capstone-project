import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { mutate } from "swr";

import Error from "@/components/Error";
import Heading from "@/components/Heading";
import { BackLink, EditLink } from "@/components/Buttons";
import { DeleteButton } from "@/components/Buttons";
import { StyledButtonContainer } from "@/styles/StyledButtonContainer";
import { StyledToolBar } from "@/styles/StyledToolbar";
import toast from "react-hot-toast";

const StyledSection = styled.section`
  margin-top: 1rem;
  border: 1px solid black;
  min-height: 5rem;
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

const StyledArticle = styled.article`
  margin-top: 1.5rem;
  padding-inline: 1rem;
`;

export default function TaskDetailPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id, taskId } = router.query;

  const {
    data: task,
    isLoading,
    error,
  } = useSWR(`/api/projects/${id}/tasks/${taskId}`);

  if (!isReady || isLoading) return <h2>Loading..</h2>;
  if (error) return <Error message={error.message} />;

  const { title, description, tag, createdAt } = task;

  const date = new Date(createdAt).toLocaleDateString();

  async function handleDelete() {
    await fetch(`/api/projects/${id}/tasks/${taskId}`, {
      method: "DELETE",
    });
    mutate(`api/projects/${id}`);
    router.push(`/projects/${id}`);
    toast.success("Task deleted!");
  }
  return (
    <>
      <StyledButtonContainer>
        <BackLink href={`/projects/${id}`} />
        <StyledToolBar>
          <EditLink url={`/projects/${id}/tasks/${taskId}/editTask`} />
          <DeleteButton handleClick={handleDelete} />
        </StyledToolBar>
      </StyledButtonContainer>

      <Heading>{title}</Heading>
      <StyledDescriptionList>
        <div>
          <StyledDescriptionListTitle>Tag:</StyledDescriptionListTitle>
          <dd>{tag}</dd>
        </div>
        <div>
          <StyledDescriptionListTitle>Created at:</StyledDescriptionListTitle>
          <dd>{createdAt}</dd>
        </div>
      </StyledDescriptionList>

      <StyledArticle>
        <StyledDescriptionListTitle>Task:</StyledDescriptionListTitle>
        <dd>{description}</dd>
      </StyledArticle>
    </>
  );
}
