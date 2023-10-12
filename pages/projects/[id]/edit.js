import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";

import Form from "@/components/Form";
import Heading from "@/components/Heading";

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
      router.push("/");
    }
  }

  if (!isReady || isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return (
    <>
      <Heading>Edit Post</Heading>
      <Form onSubmit={editProject} formName="edit-project" value={project} />
    </>
  );
}
