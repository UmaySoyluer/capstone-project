import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { StyledModal } from "@/styles/StyledModal";
import { StyledModalContent } from "@/styles/StyledModalContent";

import Loading from "@/components/Loading";
import FormProject from "../FormProject";

export default function ProjectFormModal({ onClose }) {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(`/api/projects/${id}`);

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
      toast.success("Project edited!");
    }
  }

  if (!isReady || isLoading) return <Loading />;
  if (error) return <p>Something went wrong...</p>;

  return (
    <StyledModal>
      <StyledModalContent>
        <FormProject
          value={data}
          onClose={onClose}
          onSubmit={editProject}
          formName="Edit your project"
        />
      </StyledModalContent>
    </StyledModal>
  );
}
