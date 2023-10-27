import Link from "next/link";
import {
  HiArrowLeft,
  HiOutlineTrash,
  HiOutlinePaintBrush,
  HiPlus,
  HiCheck,
  HiOutlineXMark,
} from "react-icons/hi2";
import styled, { css } from "styled-components";

const StyledBackLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;
const StyledToggleButton = styled.button`
  background-color: transparent;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-brand-900);

  ${({ variant }) =>
    variant === "mobile" &&
    css`
      padding: 0.5rem 1rem;
      border-radius: 10px;
    `}
`;

export function BackLink({ href }) {
  return (
    <StyledBackLink href={`${href}`}>
      <HiArrowLeft
        title="Icon for back to home"
        style={{ color: "var(--color-brand-900)" }}
        size={26}
      />
    </StyledBackLink>
  );
}

export function DeleteButton({ handleClick }) {
  return (
    <StyledDeleteButton onClick={handleClick}>
      <HiOutlineTrash title="Icon for delete" color="#b91c1c" size={26} />
    </StyledDeleteButton>
  );
}

// Projects

const StyledEditProjectLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function EditLink({ url }) {
  return (
    <StyledEditProjectLink href={url}>
      <HiOutlinePaintBrush
        size={26}
        style={{ color: "var(--color-brand-900)" }}
        title="Pencil icon for edit"
      />
    </StyledEditProjectLink>
  );
}

// Tasks

const StyledAddTaskLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
`;

export function AddTaskLink({ url }) {
  return (
    <StyledAddTaskLink href={url}>
      <HiPlus size={26} title="add task" />
    </StyledAddTaskLink>
  );
}

// Form buttons

const StyledSubmitButton = styled.button`
  background-color: var(--color-brand-900);
  color: var(--color-gray-50);
  border: none;
  border-radius: 10px;
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
  height: 2rem;
  width: 10rem;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

const StyledCancelLink = styled(Link)`
  background-color: var(--color-gray-100);
  color: var(--color-gray-900);
  border: 1px solid var(--color-gray-500);
  border-radius: 10px;
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
  height: 2rem;
  width: 7rem;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: var(--color-gray-200);
  }
`;

export function SubmitButton({ handleClick }) {
  return (
    <StyledSubmitButton type="submit" onClick={handleClick}>
      <HiCheck size={19} title="Icon for submit" />
      <span>Submit</span>
    </StyledSubmitButton>
  );
}

export function CancelLink({ url }) {
  return (
    <StyledCancelLink href={url}>
      <HiOutlineXMark size={19} title="Icon for cancel" />
      Cancel
    </StyledCancelLink>
  );
}

// Modal

export const ModalCancel = styled.button`
  background-color: var(--color-gray-100);
  color: var(--color-gray-900);
  border: 1px solid var(--color-gray-500);
  border-radius: 10px;
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
  height: 2rem;
  width: 7rem;
  transition: 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: var(--color-gray-200);
  }
`;

export { StyledToggleButton };

// Desktop

export const StyledToolButton = styled.button`
  height: 2rem;
  width: 7rem;
  border: none;
  border-radius: 10px;
  padding-inline: 0.5rem;
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
      color: #f9fafb;

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
