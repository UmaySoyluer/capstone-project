import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";

import Error from "@/components/Error";
import Heading from "@/components/Heading";
import { BackLink, EditLink } from "@/components/Buttons";
import { DeleteButton } from "@/components/Buttons";
import { StyledButtonContainer } from "@/styles/StyledButtonContainer";
import { StyledToolBar } from "@/styles/StyledToolbar";
import {
  StyledPriorityButtons,
  StyledPriorityTag,
} from "@/components/FormTask";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";

const StyledSection = styled.section`
  margin-top: 10vh;
  padding-inline: 2.5rem;
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

const StyledArticle = styled.article`
  margin-top: 1.5rem;
`;

const StyledPriorityLabel = styled.label`
  display: inline-block;
  width: 4rem;
  padding: 0.3rem;
  margin-left: 0px;
  font-size: 0.8rem;
  border-radius: 0.9rem;

  background: ${(props) => {
    if (props.htmlFor === "High") {
      return `
 #F87168;`;
    } else if (props.htmlFor === "Neutral") {
      return `
  #4ACE97;`;
    } else {
      return `#569DFF;`;
    }
  }};
`;

export default function TaskDetailPage() {
  const router = useRouter();

  const { data: session } = useSession();
  if (!session) {
    router.push("/Users");
  }

  const { isReady } = router;
  const { id, taskId } = router.query;

  const {
    data: task,
    isLoading,
    error,
  } = useSWR(`/api/projects/${id}/tasks/${taskId}`);

  if (!isReady || isLoading) return <h2>Loading..</h2>;
  if (error) return <Error message={error.message} />;

  const { title, description, tag, createdAt, priority } = task;

  const date = new Date(createdAt).toLocaleDateString();

  function handleDelete() {
    Swal.fire({
      icon: "question",
      iconColor: "#d1cffd",
      title: "Are you sure?",
      text: "Do you really want to delete this task? ",
      type: "question",
      showCancelButton: true,
      confirmButtonColor: "#d1cffd",
      confirmButtonText: "Delete",
      closeOnConfirm: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`/api/projects/${id}/tasks/${taskId}`, {
          method: "DELETE",
        });
        router.push(`/projects/${id}`);
        toast.success("Task deleted!");
      }
    });
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

      <StyledSection>
        <Heading>{title}</Heading>
        <StyledDescriptionList>
          <div>
            <StyledDescriptionListTitle>Tag:</StyledDescriptionListTitle>
            <dd>{tag}</dd>
          </div>
          <div>
            <StyledDescriptionListTitle>Created at:</StyledDescriptionListTitle>
            <dd>{date}</dd>
          </div>
          <div>
            <StyledDescriptionListTitle>Priority :</StyledDescriptionListTitle>
            <StyledPriorityTag>
              <StyledPriorityButtons />
              <StyledPriorityLabel htmlFor={priority[0]}>
                {priority}
              </StyledPriorityLabel>
            </StyledPriorityTag>
          </div>
        </StyledDescriptionList>

        <StyledArticle>
          <StyledDescriptionListTitle>Task:</StyledDescriptionListTitle>
          <dd>{description}</dd>
        </StyledArticle>
      </StyledSection>
    </>
  );
}
