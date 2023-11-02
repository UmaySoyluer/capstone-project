import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { mutate } from "swr";

import styled from "styled-components";
import FormTaskDesktop from "../desktop/FormTaskDesktop";
import ModalContent from "@/styles/StyledModalContent";

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

export default function TaskFormModal({ onClose, listId }) {
  const router = useRouter();
  const { id } = router.query;

  async function createTask(task) {
    const modifiedTask = {
      ...task,
      columnId: listId,
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
      <ModalContent>
        <FormTaskDesktop
          id={id}
          onClose={onClose}
          onSubmit={createTask}
          formName="Add new task"
        />
      </ModalContent>
    </StyledModal>
  );
}
