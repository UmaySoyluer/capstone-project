import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import Loading from "@/components/Loading";
import FormProject from "@/components/FormProject";
import { StyledFormContainer } from "@/styles/StyledFormContainer";

export default function EditProjectPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: project, isLoading, error } = useSWR(`/api/projects/${id}`);

  async function editProject(project) {
    const response = await fetch(`/api/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify(project),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      mutate(`/api/projects/${id}`);
      router.push(`/projects/${id}`);
      toast.success("Project edited!");
    }
  }

  if (!isReady || isLoading) return <Loading />;
  if (error) return <p>Something went wrong...</p>;

  return (
    <StyledFormContainer>
      <FormProject
        onSubmit={editProject}
        formName="Edit Project"
        value={project}
      />
    </StyledFormContainer>
  );
}
