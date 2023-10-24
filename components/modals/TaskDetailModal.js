import toast from "react-hot-toast";
import { mutate } from "swr";
import styled from "styled-components";
import Heading from "../Heading";
import { ModalCancel } from "../Buttons";
import { StyledDesktopToolButton } from "../desktop/NavigationDesktop";
import { HiOutlinePaintBrush, HiOutlineTrash } from "react-icons/hi2";
import { useRouter } from "next/router";
import { useState } from "react";
import FormTaskDesktop from "../desktop/FormTaskDesktop";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(17, 24, 39, 0.6);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledContainer = styled.div`
  border-radius: 10px;
  width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-gray-50);
  padding-block: 1rem 2rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

const StyledDescriptionList = styled.dl`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-inline: 2rem;
`;

const StyledDescriptionListTitle = styled.dt`
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--color-brand-900);
`;

const StyledArticle = styled.article`
  margin-block: 1.5rem;
  padding-inline: 2rem;
`;

const StyledButtonContainer = styled.div`
  padding-inline: 2rem;
  display: flex;
  justify-content: space-between;
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

  async function handleDelete() {
    await fetch(`/api/projects/${id}/tasks/${taskId}`, {
      method: "DELETE",
    });

    mutate(`/api/projects/${id}`);
    onClose();
    toast.success("Task deleted!");
  }
  return (
    <StyledModal>
      {!editMode && (
        <StyledContainer>
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

            <StyledDesktopToolButton variant="edit" onClick={handleEditMode}>
              <HiOutlinePaintBrush
                size={26}
                color="#f9fafb"
                title="Pencil icon for edit"
              />
              Edit
            </StyledDesktopToolButton>
            <StyledDesktopToolButton variant="delete" onClick={handleDelete}>
              <HiOutlineTrash
                title="Icon for delete"
                color="#f9fafb"
                size={26}
              />
              Delete
            </StyledDesktopToolButton>
          </StyledButtonContainer>
        </StyledContainer>
      )}

      {editMode && (
        <StyledContainer>
          <FormTaskDesktop
            task={task}
            onEdit={handleEditMode}
            editTask={editTask}
            formName={"Edit your task"}
          />
        </StyledContainer>
      )}
    </StyledModal>
  );
}
