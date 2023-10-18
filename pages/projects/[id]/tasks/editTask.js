import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";

import FormAddTask from "@/components/FormAddTask";
import Error from "@/components/Error";

export default function EditProjectPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: task, isLoading, error } = useSWR(`/api/projects/${id}`);

  async function editTask(project) {
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
    }
  }

  if (!isReady || isLoading) return <p>Loading...</p>;
  if (error) return <Error />;

  return (
    <>
      <FormAddTask onSubmit={editTask} formName="Edit a task" value={task} />
    </>
  );
}
