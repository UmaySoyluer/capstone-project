import Link from "next/link";
import {
  HiArrowLeft,
  HiOutlineTrash,
  HiPencil,
  HiCheck,
} from "react-icons/hi2";
import { MdOutlineCancel } from "react-icons/md";
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
      <HiPencil size={20} />
    </Link>
  );
}

// Form buttons

const StyledSubmitButton = styled.button`
  background: var(--blue-500);
  border-radius: 10px;
  padding-inline: 1rem;
  padding-block: 0.3rem;
  width: 50%;
  border: 1px solid var(--blue-500);
  color: var(--gray-100);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCancelLink = styled(Link)`
  border: 1px solid var(--violet-500);
  background: var(--violet-500);
  border-radius: 10px;
  padding-inline: 1rem;
  padding-block: 0.3rem;
  width: 45%;
  text-align: center;
  color: var(--gray-100);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function SubmitButton({ handleClick }) {
  return (
    <StyledSubmitButton type="submit" onClick={handleClick}>
      <HiCheck title="submit" />
      &#8203; Submit
    </StyledSubmitButton>
  );
}

export function CancelLink({ url }) {
  return (
    <StyledCancelLink href={url}>
      <MdOutlineCancel title="cancel" />
      &#8203; Cancel
    </StyledCancelLink>
  );
}
