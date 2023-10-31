import styled from "styled-components";
import toast from "react-hot-toast";
import { mutate } from "swr";

import Heading from "../Heading";
import { ModalCancel, StyledToolButton } from "../Buttons";
import { HiOutlinePaintBrush, HiOutlineTrash } from "react-icons/hi2";
import { useRouter } from "next/router";
import { useState } from "react";
import FormTaskDesktop from "../desktop/FormTaskDesktop";
import { StyledModal } from "@/styles/StyledModal";
import ModalContent from "@/styles/StyledModalContent";
import Swal from "sweetalert2";

const StyledDescriptionList = styled.dl`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledDescriptionListTitle = styled.dt`
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--color-brand-900);
`;

const StyledArticle = styled.article`
  margin: 1rem 0 2rem 0;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledTools = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default function TaskDetailModal({ task, onClose }) {
  const [editMode, setEditMode] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const { title, description, tag, createdAt, _id: taskId } = task;

  const date = new Date(createdAt).toLocaleDateString();

  function handleEditMode() {
    setEditMode((previous) => !previous);
  }

  async function editTask(task) {
    const response = await fetch(`/api/projects/${id}/tasks/${taskId}`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      mutate(`/api/projects/${id}`);
      toast.success("Task edited!");
    }
  }

  function handleDelete() {
    Swal.fire({
      title: "Delete Task",
      text: "Do you really want to delete this task? ",
      type: "question",
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      confirmButtonText: "Delete",
      closeOnConfirm: true,
      width: 400,
      background: "var(--color-gray-50)",
      color: "var(--color-gray-900)",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`/api/projects/${id}/tasks/${taskId}`, {
          method: "DELETE",
        });

        mutate(`/api/projects/${id}`);
        onClose();
        toast.success("Task deleted!");
      }
    });
  }

  return (
    <StyledModal>
      {!editMode && (
        <ModalContent>
          <Heading>{title}</Heading>
          <StyledDescriptionList>
            <div>
              <StyledDescriptionListTitle>Tag:</StyledDescriptionListTitle>
              <dd>{tag}</dd>
            </div>
            <div>
              <StyledDescriptionListTitle>
                Created at:
              </StyledDescriptionListTitle>
              <dd>{date}</dd>
            </div>
          </StyledDescriptionList>

          <StyledArticle>
            <StyledDescriptionListTitle>Task:</StyledDescriptionListTitle>
            <dd>{description}</dd>
          </StyledArticle>

          <StyledButtonContainer>
            <ModalCancel onClick={onClose}>Close</ModalCancel>

            <StyledTools>
              <StyledToolButton variant="edit" onClick={handleEditMode}>
                <HiOutlinePaintBrush
                  size={20}
                  style={{ color: "var(--color-gray-50)" }}
                  title="Pencil icon for edit"
                />
                Edit
              </StyledToolButton>
              <StyledToolButton variant="delete" onClick={handleDelete}>
                <HiOutlineTrash
                  title="Icon for delete"
                  color="#f9fafb"
                  size={20}
                />
                Delete
              </StyledToolButton>
            </StyledTools>
          </StyledButtonContainer>
        </ModalContent>
      )}

      {editMode && (
        <ModalContent>
          <FormTaskDesktop
            task={task}
            onEdit={handleEditMode}
            editTask={editTask}
            formName={"Edit your task"}
          />
        </ModalContent>
      )}
    </StyledModal>
  );
}
