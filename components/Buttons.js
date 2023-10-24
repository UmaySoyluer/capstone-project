import Link from "next/link";
import {
  HiArrowLeft,
  HiOutlineTrash,
  HiOutlinePaintBrush,
  HiPlus,
  HiCheck,
  HiOutlineXMark,
} from "react-icons/hi2";
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
const StyledToggleButton = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 40px;
  height: 20px;
  border-radius: 30px;
  background-color: #d9d8dc;
  position: absolute;
  top: 0.7rem;
  right: 1.2rem;
  transition: all 0.5s ease-in;
  cursor: pointer;
  z-index: 1;

  &:before {
    content: "";
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #f1f2f2;
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    transition: all 0.5s ease-in;
  }

  &:checked:before {
    background: #474748;
    left: 20px;
  }

  &:checked {
    background: #242424;
  }
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
      <HiOutlinePaintBrush
        size={26}
        color="#1e3a8a"
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
  border: 1px solid var(--color-brand-900);
  border-radius: 10px;
  padding-inline: 1rem;
  padding-block: 0.3rem;
  width: 55%;
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
  padding-inline: 1rem;
  padding-block: 0.3rem;
  width: 40%;
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
  padding-inline: 1rem;
  padding-block: 0.3rem;
  width: 40%;
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

