import { HiOutlinePaintBrush, HiOutlineTrash } from "react-icons/hi2";
import styled, { css } from "styled-components";
import ProjectFormModal from "../modals/ProjectFormModal";
import { useState } from "react";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Link from "next/link";

const StyledNavigation = styled.nav`
  width: 100%;
  height: 10vh;
  padding-block: 0.5rem;
  padding-inline: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTools = styled.div`
  display: flex;
  gap: 1rem;
`;

export const StyledDesktopToolButton = styled.button`
  border: none;
  border-radius: 10px;
  padding-inline: 1.5rem;
  padding-block: 0.5rem;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${({ variant }) =>
    variant === "delete" &&
    css`
      background-color: #b91c1c;
      color: var(--color-gray-50);

      &:hover {
        background-color: #dc2626;
      }
    `}

  ${({ variant }) =>
    variant === "edit" &&
    css`
      background-color: var(--color-brand-900);
      color: var(--color-gray-50);

      &:hover {
        background-color: var(--color-brand-700);
      }
    `}
`;

export default function NavigationDesktop({ onDelete }) {
  const { width } = useWindowDimensions();
  const [showModal, setShowModal] = useState(false);

  if (width <= 810) return setShowModal(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <StyledNavigation>
        <Link href={"/"}>Home</Link>
        <StyledTools>
          <StyledDesktopToolButton
            variant="edit"
            onClick={openModal}
            type="button"
          >
            <HiOutlinePaintBrush
              size={26}
              color="#f9fafb"
              title="Pencil icon for edit"
            />
            Edit Project
          </StyledDesktopToolButton>
          <StyledDesktopToolButton
            variant="delete"
            onClick={onDelete}
            type="button"
          >
            <HiOutlineTrash title="Icon for delete" color="#f9fafb" size={26} />
            Delete
          </StyledDesktopToolButton>
        </StyledTools>
      </StyledNavigation>

      {showModal && <ProjectFormModal onClose={closeModal} />}
    </>
  );
}
