import { useRouter } from "next/router";
import useSWR from "swr";
import { HiArrowLeft } from "react-icons/hi2";

import Error from "@/components/Error";
import Heading from "@/components/Heading";
import Button from "@/components/StyledButton";
import StyledButton from "@/components/StyledButton";

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
      <StyledButton onClick={router.back}>
        <HiArrowLeft />
      </StyledButton>
      <StyledButton onClick={handleClick}>Edit</StyledButton>
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