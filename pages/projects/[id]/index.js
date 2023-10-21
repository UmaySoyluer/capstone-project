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
import { StyledButtonContainer } from "@/styles/StyledButtonContainer";
import { StyledToolBar } from "@/styles/StyledToolbar";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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

  const { title, description, endDate, department, teamLead, tasks } = project;

  function handleDelete() {
    Swal.fire({
      icon: "question",
      iconColor: "#d1cffd",
      title: "Are you sure?",
      text: "Do you really want to delete this project? ",
      type: "question",
      showCancelButton: true,
      confirmButtonColor: "#d1cffd",
      confirmButtonText: "Delete",
      closeOnConfirm: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`/api/projects/${id}`, {
          method: "DELETE",
        });
        router.push("/");
        toast.success("Project deleted!");
      }
    });
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
      <TaskList id={id} tasks={tasks} />
    </>
  );
}
