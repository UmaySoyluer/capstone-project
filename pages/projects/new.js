import { mutate } from "swr";
import { useRouter } from "next/router";

import Form from "@/components/Form";
import Heading from "@/components/Heading";

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
      router.push("/");
    }
  }
  return (
    <>
      <Heading>Create Project</Heading>
      <Form onSubmit={createProject} formName="create-project" />
    </>
  );
}
