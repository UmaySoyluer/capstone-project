import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";

import FormTask from "@/components/FormTask";
import Error from "@/components/Error";
import Loading from "@/components/Loading";

export default function EditProjectPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id, taskId } = router.query;

  const {
    data: task,
    isLoading,
    error,
  } = useSWR(`/api/projects/${id}/tasks/${taskId}`);

  async function editTask(project) {
    const response = await fetch(`/api/projects/${id}/tasks/${taskId}`, {
      method: "PUT",
      body: JSON.stringify(project),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      mutate(`/api/projects/${id}/tasks/${taskId}`);
      router.push(`/projects/${id}/tasks/${taskId}`);
    }
  }

  if (!isReady || isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <>
      <FormTask
        id={id}
        onSubmit={editTask}
        formName="Edit a task"
        value={task}
      />
    </>
  );
}
