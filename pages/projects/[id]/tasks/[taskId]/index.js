import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

import Error from "@/components/Error";
import Heading from "@/components/Heading";
import { BackLink } from "@/components/Buttons";
import { DeleteButton } from "@/components/Buttons";

const StyledContainer = styled.div`
  padding-inline: 1rem;
  margin-top: 1.5rem;
`;

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

  if (!isReady || isLoading) return <h2>Loading..</h2>;
  if (error) return <Error message={error.message} />;

  const { title, description, tag, createdAt } = task;
  const date = new Date(createdAt).toLocaleDateString();

  async function handleDelete() {
    await fetch(`/api/projects/${id}/tasks/${taskId}`, {
      method: "DELETE",
    });

    router.push(`/projects/${id}`);
  }
  return (
    <>
      <StyledContainer>
        <BackLink href={`/projects/${id}`} />
        <DeleteButton handleClick={handleDelete} />
      </StyledContainer>
      <Heading>Task : {title}</Heading>
      <StyledArticle>
        <h4>Description</h4>
        <StyledSection>
          <p>{description}</p>
        </StyledSection>
      </StyledArticle>
      <StyledArticle>
        <p>Active Tag : {tag}</p>
        <p>Created at : {date}</p>
      </StyledArticle>
    </>
  );
}
