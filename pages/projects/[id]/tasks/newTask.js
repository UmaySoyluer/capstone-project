import { mutate } from "swr";
import { useRouter } from "next/router";

import FormTask from "@/components/FormTask";
import toast from "react-hot-toast";

export default function CreateTaskPage() {
  const router = useRouter();
  const { id } = router.query;

  async function createTask(task) {
    const response = await fetch(`/api/projects/${id}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (response.ok) {
      mutate(`/api/projects/${id}`);
      router.push(`/projects/${id}`);
      toast.success("New task created!");
    }
  }

  return <FormTask id={id} onSubmit={createTask} formName="Create a task" />;
}
