import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import styled from "styled-components";
import toast from "react-hot-toast";

import useWindowDimensions from "@/hooks/useWindowDimensions";

import Loading from "@/components/Loading";
import Error from "@/components/Error";

import TaskList from "@/components/TaskList";
import ProjectDetailsDesktop from "@/components/desktop/ProjectDetailsDesktop";
import ProjectDetailsMobile from "@/components/mobile/ProjectDetailsMobile";
import ButtonBar from "@/components/mobile/ButtonBar";

import Swal from "sweetalert2";
import useEnsureAuth from "@/hooks/useEnsureAuth";

const StyledMain = styled.main`
  height: 91vh;
  display: flex;
  flex-direction: column;
`;

export default function ProjectDetailPage() {
  useEnsureAuth();

  const router = useRouter();

  const { width } = useWindowDimensions();

  const { isReady } = router;
  const { id } = router.query;

  const { data: project, isLoading, error } = useSWR(`/api/projects/${id}`);

  if (!isReady || isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const { columns } = project;

  function handleDelete() {
    Swal.fire({
      title: "Delete Project",
      text: "Do you really want to delete this project? ",
      type: "question",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      confirmButtonText: "Delete",
      closeOnConfirm: true,
      width: 400,
      background: "var(--color-gray-50)",
      color: "var(--color-gray-900)",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`/api/projects/${id}`, {
          method: "DELETE",
        });
        router.push("/ProjectsOverview");
        toast.success("Project deleted!");
      }
    });
  }

  return (
    <>
      {width <= 810 && (
        <StyledMain>
          <ButtonBar handleDelete={handleDelete} id={id} />
          <ProjectDetailsMobile project={project} />
          <TaskList id={id} columns={columns} />
        </StyledMain>
      )}
      {width > 810 && (
        <StyledMain>
          <ProjectDetailsDesktop project={project} onDelete={handleDelete} />
          <TaskList id={id} columns={columns} />
        </StyledMain>
      )}
    </>
  );
}
