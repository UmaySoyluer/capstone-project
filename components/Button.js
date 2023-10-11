import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";

export default function Button() {
  return (
    <Link href={"/"}>
      <HiArrowLeft />
    </Link>
  );
}
