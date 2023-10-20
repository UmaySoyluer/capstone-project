import Link from "next/link";
import {
  HiArrowLeft,
  HiOutlineTrash,
  HiPencil,
  HiPlusCircle,
} from "react-icons/hi2";
import styled from "styled-components";

const StyledDeleteButton = styled.button`
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
    <Link href={`${href}`}>
      <HiArrowLeft title="Icon for back to home" color="#1e3a8a" size={26} />
    </Link>
  );
}

export function DeleteButton({ handleClick }) {
  return (
    <StyledDeleteButton onClick={handleClick}>
      <HiOutlineTrash title="Icon for delete" color="#7f1d1d" size={26} />
    </StyledDeleteButton>
  );
}

export function EditLink({ url }) {
  return (
    <Link href={url}>
      <HiPencil size={24} color="#1e3a8a" title="Pencil icon for edit" />
    </Link>
  );
}

export function AddTaskLink({ url }) {
  return (
    <Link href={url}>
      <HiPlusCircle size={30} title="add task" />
    </Link>
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

export { StyledToggleButton };
