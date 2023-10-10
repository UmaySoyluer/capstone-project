import Project from "./Project";
import Error from "@/components/Error";
import useSWR from "swr";

export default function ProjectList() {
  const { data: projects, isLoading, error } = useSWR("/api/projects");

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }
  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <>
      {projects?.length
        ? projects.map((project) => (
            <Project key={project.id} project={project} />
          ))
        : "No projects found."}
    </>
  );
}
