import { useRouter } from "next/router";
import useSWR from "swr";
import { HiArrowLeft } from "react-icons/hi2";

import Error from "@/components/Error";
import Heading from "@/components/Heading";
import Link from "next/link";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: project, isLoading, error } = useSWR(`/api/projects/${id}`);

  if (!isReady || isLoading) return <h2>Loading..</h2>;
  if (error) return <Error message={error.message} />;

  const { title, description, endDate, department, teamLead } = project;

  function handleClick() {
    router.push(`/projects/${id}/edit`);
  }

  return (
    <>
      <Link href="/">
        <HiArrowLeft />
      </Link>

      <Heading>{title}</Heading>
      <article>
        <h3>{department}</h3>
        <p>{teamLead}</p>
        <p>{endDate}</p>
        <p>{description}</p>
      </article>
    </>
  );
}
