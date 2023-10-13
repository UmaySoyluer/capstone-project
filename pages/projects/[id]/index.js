import { useRouter } from "next/router";
import useSWR from "swr";
import { HiPencil } from "react-icons/hi2";
import Link from "next/link";

import Error from "@/components/Error";
import Heading from "@/components/Heading";
import { BackLink, DeleteButton } from "@/components/Buttons";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: project, isLoading, error } = useSWR(`/api/projects/${id}`);

  if (!isReady || isLoading) return <h2>Loading..</h2>;
  if (error) return <Error message={error.message} />;

  const { title, description, endDate, department, teamLead } = project;

  async function handleDelete() {
    await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    router.push("/");
  }

  return (
    <>
      <BackLink />
      <Link href={`/projects/${id}/edit`}>
        <HiPencil />
      </Link>
      <Heading>{title}</Heading>
      <DeleteButton handleClick={handleDelete} />
      <article>
        <h3>{department}</h3>
        <p>{teamLead}</p>
        <p>{endDate}</p>
        <p>{description}</p>
      </article>
    </>
  );
}
