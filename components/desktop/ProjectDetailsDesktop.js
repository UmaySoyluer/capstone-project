import styled from "styled-components";
import Heading from "@/components/Heading";
import { StyledToolButton } from "../Buttons";
import { HiOutlinePaintBrush, HiOutlineTrash } from "react-icons/hi2";
import { useState } from "react";
import ProjectFormModal from "../modals/ProjectFormModal";

const StyledContainer = styled.div`
  height: 7vh;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 0.5rem 1.5rem;
  padding: 1rem 2rem;
  background-color: var(--color-gray-100);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
`;

const StyledDetails = styled.div`
  display: grid;
  gap: 1rem;
  width: 70%;
  grid-template-columns: repeat(3, 1fr);
`;

const StyledDepartment = styled.h3`
  font-size: 0.9rem;
  text-transform: uppercase;
  color: var(--color-brand-900);
`;

const StyledDescriptionListTitle = styled.dt`
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--color-brand-900);
`;

const StyledTools = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 0.5rem;
`;

export default function ProjectDetailsDesktop({ project, onDelete }) {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  const { title, endDate, department, teamLead } = project;
  return (
    <>
      <StyledContainer>
        <StyledDetails>
          <div>
            <Heading>{title}</Heading>
            <StyledDepartment>{department}</StyledDepartment>
          </div>

          <dl>
            <StyledDescriptionListTitle>Team lead:</StyledDescriptionListTitle>
            <dd>{teamLead}</dd>
          </dl>

          <dl>
            <StyledDescriptionListTitle>Due date:</StyledDescriptionListTitle>
            <dd>{endDate}</dd>
          </dl>
        </StyledDetails>

        <StyledTools>
          <StyledToolButton variant="edit" onClick={openModal} type="button">
            <HiOutlinePaintBrush
              size={20}
              style={{ color: "var(--color-gray-50)" }}
              title="Icon icon for edit"
            />
            Edit
          </StyledToolButton>
          <StyledToolButton variant="delete" onClick={onDelete} type="button">
            <HiOutlineTrash size={20} color="#f9fafb" title="Icon for delete" />
            Delete
          </StyledToolButton>
        </StyledTools>
      </StyledContainer>

      {showModal && <ProjectFormModal onClose={closeModal} />}
    </>
  );
}
