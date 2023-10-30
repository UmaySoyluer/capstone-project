import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import { useSession } from "next-auth/react";

import Error from "@/components/Error";
import Loading from "@/components/Loading";

import TaskListMobile from "@/components/mobile/TaskListMobile";
import toast from "react-hot-toast";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import TaskListDesktop from "@/components/desktop/TaskListDesktop";
import ProjectDetailsDesktop from "@/components/desktop/ProjectDetailsDesktop";
import ProjectDetailsMobile from "@/components/mobile/ProjectDetailsMobile";
import ButtonBar from "@/components/mobile/ButtonBar";

import Swal from "sweetalert2";

const StyledMain = styled.main`
  height: 91vh;
  display: flex;
  flex-direction: column;
`;

export default function ProjectDetailPage() {
  const { width } = useWindowDimensions();

  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: session } = useSession();
  useEffect(() => {
    if (!session) {
      router.push("/SignIn");
    }
  }, [session]);

  const { data: project, isLoading, error } = useSWR(`/api/projects/${id}`);

  if (!isReady || isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const { tasks } = project;

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
        router.push("/");
        toast.success("Project deleted!");
      }
    });
  }

  return (
    <>
      {width <= 810 && (
        <>
          <ButtonBar handleDelete={handleDelete} id={id} />
          <ProjectDetailsMobile project={project} />
          <TaskListMobile id={id} tasks={tasks} />
        </>
      )}
      {width > 810 && (
        <StyledMain>
          <ProjectDetailsDesktop project={project} onDelete={handleDelete} />
          <TaskListDesktop id={id} tasks={tasks} />
        </StyledMain>
      )}
    </>
  );
}
