import { useRouter } from "next/router";
import useSWR from "swr";

import Error from "@/components/Error";
import Heading from "@/components/Heading";
import BackLink, { DeleteLink } from "@/components/Button";

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
      <Heading>{title}</Heading>
      <DeleteLink href="/" />
      <article>
        <h3>{department}</h3>
        <p>{teamLead}</p>
        <p>{endDate}</p>
        <p>{description}</p>
      </article>
    </>
  );
}
