import {
  BackLink,
  DeleteButton,
  StyledEditProjectButton,
} from "@/components/Buttons";
import { StyledButtonContainer } from "@/styles/StyledButtonContainer";
import { StyledToolBar } from "@/styles/StyledToolbar";
import ProjectFormModal from "../modals/ProjectFormModal";
import { useState } from "react";
import { HiOutlinePaintBrush } from "react-icons/hi2";

export default function ButtonBar({ handleDelete }) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }
  return (
    <>
      <StyledButtonContainer>
        <BackLink href={"/ProjectsOverview"} />
        <StyledToolBar>
          <StyledEditProjectButton onClick={openModal}>
            <HiOutlinePaintBrush
              size={26}
              style={{ color: "var(--color-brand-900)" }}
              title="Pencil icon for edit"
            />
          </StyledEditProjectButton>
          <DeleteButton handleClick={handleDelete} />
        </StyledToolBar>
      </StyledButtonContainer>
      {showModal && <ProjectFormModal onClose={closeModal} />}
    </>
  );
}
