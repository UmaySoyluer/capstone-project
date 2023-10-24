import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import Loading from "@/components/Loading";
import Form from "../Form";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  background-color: rgba(17, 24, 39, 0.6);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledFormContainer = styled.div`
  border-radius: 10px;
  width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-gray-50);
  padding: 1rem 1rem 2rem 1rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

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
      <StyledFormContainer>
        <Form
          value={data}
          onClose={onClose}
          onSubmit={editProject}
          formName="Edit your project"
        />
      </StyledFormContainer>
    </StyledModal>
  );
}
