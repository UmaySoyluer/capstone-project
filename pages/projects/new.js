import { mutate } from "swr";
import { useRouter } from "next/router";

import FormProject from "@/components/FormProject";
import toast from "react-hot-toast";
import { StyledFormContainer } from "@/styles/StyledFormContainer";

export default function CreateProjectPage() {
  const router = useRouter();

  async function createProject(project) {
    const response = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    });

    if (response.ok) {
      mutate();
      router.push("/ProjectsOverview");
      toast.success("New project created!");
    }
  }
  return (
    <StyledFormContainer>
      <FormProject onSubmit={createProject} formName="Create a Project" />
    </StyledFormContainer>
  );
}
