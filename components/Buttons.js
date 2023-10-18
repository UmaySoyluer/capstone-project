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

export function BackLink() {
  return (
    <Link href={"/"}>
      <HiArrowLeft title="back" size={20} />
    </Link>
  );
}

export function DeleteButton({ handleClick }) {
  return (
    <StyledDeleteButton onClick={handleClick}>
      <HiOutlineTrash title="delete" size={22} />
    </StyledDeleteButton>
  );
}

export function EditLink({ url }) {
  return (
    <Link href={url}>
      <HiPencil size={20} title="edit" />
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
  background: transparent;
  border-radius: 10px;
  padding-inline: 1rem;
  padding-block: 0.3rem;
  width: 50%;
  border: 1px solid black;

  &:hover {
  }
`;

const StyledCancelLink = styled(Link)`
  border: 1px solid black;
  background: transparent;
  border-radius: 10px;
  padding-inline: 1rem;
  padding-block: 0.3rem;
  width: 45%;
  text-align: center;
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
