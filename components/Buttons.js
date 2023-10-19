import Link from "next/link";
import { HiArrowLeft, HiOutlineTrash, HiPencil, HiPlus } from "react-icons/hi2";
import styled from "styled-components";

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

export function BackLink({ href }) {
  return (
    <StyledBackLink href={`${href}`}>
      <HiArrowLeft title="Icon for back to home" color="#1e3a8a" size={26} />
    </StyledBackLink>
  );
}

export function DeleteButton({ handleClick }) {
  return (
    <StyledDeleteButton onClick={handleClick}>
      <HiOutlineTrash title="Icon for delete" color="#7f1d1d" size={26} />
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
      <HiPencil size={24} color="#1e3a8a" title="Pencil icon for edit" />
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
  border: 1px solid var(--color-brand-900);
  border-radius: 10px;
  padding-inline: 1rem;
  padding-block: 0.3rem;
  width: 55%;
  transition: 0.3s;

  &:hover {
    background-color: var(--color-brand-700);
  }
`;

const StyledCancelLink = styled(Link)`
  background-color: var(--color-gray-100);
  color: var(--color-gray-900);
  border: 1px solid var(--color-gray-500);
  border-radius: 10px;
  padding-inline: 1rem;
  padding-block: 0.3rem;
  width: 40%;
  text-align: center;
  transition: 0.3s;

  &:hover {
    background-color: var(--color-gray-200);
  }
`;

export function SubmitButton({ handleClick }) {
  return (
    <StyledSubmitButton type="submit" onClick={handleClick}>
      Submit
    </StyledSubmitButton>
  );
}

export function CancelLink({ url }) {
  return <StyledCancelLink href={url}>Cancel</StyledCancelLink>;
}
