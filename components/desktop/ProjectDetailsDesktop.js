import styled from "styled-components";
import Heading from "@/components/Heading";
import { StyledToolButton } from "../Buttons";
import { HiOutlinePaintBrush, HiOutlineTrash } from "react-icons/hi2";
import { useState } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import ProjectFormModal from "../modals/ProjectFormModal";

const StyledContainer = styled.div`
  height: 20vh;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: space-around;
  border-radius: 10px;
  margin: 0.5rem 1.5rem;
  padding: 1rem 1rem;
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

const StyledArticle = styled.article`
  grid-column: -1 / 1;
  overflow: auto;
`;

const StyledTools = styled.div`
  display: flex;
  align-self: flex-start;
  gap: 0.5rem;
`;

export default function ProjectDetailsDesktop({ project, onDelete }) {
  const { width } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);

  if (width <= 810) return setShowModal(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  const { title, description, endDate, department, teamLead } = project;
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

          <StyledArticle>
            <dl>
              <StyledDescriptionListTitle>
                Description:
              </StyledDescriptionListTitle>

              <dd>{description}</dd>
            </dl>
          </StyledArticle>
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
