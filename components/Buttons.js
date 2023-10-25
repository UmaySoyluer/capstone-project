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

export const CallToActionLink = styled(Link)`
  margin: 2rem 0 2rem;
  color: var(--color-gray-50);
  width: 170px;
  height: 40px;
  border-radius: 5px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  background: rgb(0, 172, 238);
  background: linear-gradient(
    0deg,
    rgba(0, 172, 238, 1) 0%,
    rgba(2, 126, 251, 1) 100%
  );

  line-height: 42px;
  padding: 0;
  border: none;

  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  &:before,
  &:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
  }

  &:before {
    height: 0%;
    width: 2px;
  }

  &:after {
    width: 0%;
    height: 2px;
  }

  &:hover {
    background: transparent;
    box-shadow: none;
  }

  &:hover:before {
    height: 100%;
  }

  &:hover:after {
    width: 100%;
  }
  & span:hover {
    color: rgba(2, 126, 251, 1);
  }
  & span:before,
  & span:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
  }
  & span:before {
    width: 2px;
    height: 0%;
  }
  & span:after {
    width: 0%;
    height: 2px;
  }
  & span:hover:before {
    height: 100%;
  }
  & span:hover:after {
    width: 100%;
  }
`;
