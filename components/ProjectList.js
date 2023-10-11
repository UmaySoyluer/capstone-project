import Project from "./Project";
import Error from "@/components/Error";
import useSWR from "swr";

export default function ProjectList() {
  const { data: projects, isLoading, error } = useSWR("/api/projects");

  if (isLoading) {
    return <h2>Loading ... </h2>;
  }
  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <ul>
      {projects?.length ? (
        projects.map((project) => (
          <Project key={project.id} project={project} />
        ))
      ) : (
        <p>No projects found.</p>
      )}
    </ul>
  );
}
