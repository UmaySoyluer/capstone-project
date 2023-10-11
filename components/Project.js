import Link from "next/link";

export default function Project({ project }) {
  if (!project) return;

  const { _id: id, title } = project;

  return (
    <li>
      <Link href={`/projects/${id}`}>
        <h2>{title}</h2>
      </Link>
    </li>
  );
}
