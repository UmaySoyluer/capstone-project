import Link from "next/link";
import { HiArrowLeft, HiOutlineTrash } from "react-icons/hi2";

export default function BackLink() {
  return (
    <Link href={"/"}>
      <HiArrowLeft title="back" />
    </Link>
  );
}

export function DeleteLink({ href }) {
  return (
    <Link href={href}>
      <HiOutlineTrash title="delete" />
    </Link>
  );
}
