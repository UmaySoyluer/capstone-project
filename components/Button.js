import Link from "next/link";
import { HiArrowLeft, HiOutlineTrash } from "react-icons/hi2";

export default function Button() {
  return (
    <Link href={"/"}>
      <HiArrowLeft title="back" />
    </Link>
  );
}

export function DeleteButton({ handleClick }) {
  return (
    <button onClick={handleClick}>
      <HiOutlineTrash title="Delete" />
    </button>
  );
}
