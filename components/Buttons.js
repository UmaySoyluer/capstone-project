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
      <HiOutlineTrash title="delete" color="#b91c1c" size={26} />
    </StyledDeleteButton>
  );
}

// Projects

export const StyledEditProjectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
`;

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
