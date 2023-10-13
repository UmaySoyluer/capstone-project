import Link from "next/link";
import { HiArrowLeft, HiOutlineTrash } from "react-icons/hi2";

export function BackLink() {
  return (
    <Link href={"/"}>
      <HiArrowLeft title="back" />
    </Link>
  );
}

export function DeleteButton({ handleClick }) {
  return (
    <button onClick={handleClick}>
      <HiOutlineTrash title="delete" />
    </button>
  );
}
