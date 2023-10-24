import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { mutate } from "swr";

import styled from "styled-components";
import FormTaskDesktop from "../desktop/FormTaskDesktop";

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

export default function TaskFormModal({ onClose, list }) {
  const router = useRouter();
  const { id } = router.query;

  async function createTask(task) {
    const modifiedTask = {
      ...task,
      tag: list,
    };

    const response = await fetch(`/api/projects/${id}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(modifiedTask),
    });

    if (response.ok) {
      mutate(`/api/projects/${id}`);
      toast.success("New task created!");
    }
  }

  return (
    <StyledModal>
      <StyledFormContainer>
        <FormTaskDesktop
          id={id}
          onClose={onClose}
          onSubmit={createTask}
          formName="New task"
        />
      </StyledFormContainer>
    </StyledModal>
  );
}
