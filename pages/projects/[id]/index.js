import { useRouter } from "next/router";
import useSWR from "swr";

import Error from "@/components/Error";
import Loading from "@/components/Loading";

import TaskList from "@/components/TaskList";
import toast from "react-hot-toast";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import TaskListDesktop from "@/components/desktop/TaskListDesktop";
import ProjectDetailsDesktop from "@/components/desktop/ProjectDetailsDesktop";
import ProjectDetails from "@/components/ProjectDetails";
import ButtonBar from "@/components/ButtonBar";
import NavigationDesktop from "@/components/desktop/NavigationDesktop";

export default function ProjectDetailPage() {
  const { width } = useWindowDimensions();

  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: project, isLoading, error } = useSWR(`/api/projects/${id}`);

  if (!isReady || isLoading) return <Loading />;
  if (error) return <Error message={error.message} />;

  const { tasks } = project;

  async function handleDelete() {
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    router.push("/");
    toast.success("Project deleted!");
  }

  return (
    <>
      {width <= 810 && (
        <>
          <ButtonBar handleDelete={handleDelete} id={id} />
          <ProjectDetails project={project} />
          <TaskList id={id} tasks={tasks} />
        </>
      )}
      {width > 810 && (
        <>
          <NavigationDesktop onDelete={handleDelete} />
          <ProjectDetailsDesktop project={project} />
          <TaskListDesktop id={id} tasks={tasks} />
        </>
      )}
    </>
  );
}
