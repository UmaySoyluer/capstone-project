import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

import Error from "@/components/Error";
import Heading from "@/components/Heading";
import { BackLink, EditLink } from "@/components/Buttons";
import Loading from "@/components/Loading";
import { StyledButtonContainer, StyledToolBar } from "../..";

const StyledSection = styled.section`
  margin-top: 1rem;
  border: 1px solid black;
  min-height: 5rem;
`;

const StyledArticle = styled.article`
  margin: 1.5rem auto;
  width: 70%;
  min-height: 10rem;
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

  if (!isReady || isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const { title, description, tag, createdAt } = task;
  const creationDate = createdAt.toLocaleDateString();

  return (
    <>
      <StyledButtonContainer>
        <BackLink href={`/projects/${id}`} />
        <StyledToolBar>
          <EditLink url={`/projects/${id}/tasks/${taskId}/editTask`} />
        </StyledToolBar>
      </StyledButtonContainer>

      <Heading>Task : {title}</Heading>
      <StyledArticle>
        <h4>Description</h4>
        <StyledSection>
          <p>{description}</p>
        </StyledSection>
      </StyledArticle>
      <StyledArticle>
        <p>Active Tag : {tag}</p>
        <p>Created at : {creationDate}</p>
      </StyledArticle>
    </>
  );
}
