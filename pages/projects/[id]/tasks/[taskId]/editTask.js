import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";

import FormTask from "@/components/FormTask";
import Error from "@/components/Error";
import Loading from "@/components/Loading";
import toast from "react-hot-toast";
import { StyledFormContainer } from "@/styles/StyledFormContainer";

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
      toast.success("Task edited!");
    }
  }

  if (!isReady || isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <StyledFormContainer>
      <FormTask id={id} onSubmit={editTask} formName="Edit task" value={task} />
    </StyledFormContainer>
  );
}
