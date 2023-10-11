import Heading from "@/components/Heading";
import ProjectList from "@/components/ProjectList";
import StyledButton from "@/components/StyledButton";
import { useRouter } from "next/router";

export default function ProjectsOverviewPage() {
  const router = useRouter();

  function handleClick() {
    router.push("/projects/new");
  }

  return (
    <>
      <Heading>Project Overview</Heading>
      <StyledButton onClick={handleClick}>+</StyledButton>
      <ProjectList />
    </>
  );
}
