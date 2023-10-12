import Heading from "@/components/Heading";
import ProjectList from "@/components/ProjectList";
import Link from "next/link";

export default function ProjectsOverviewPage() {
  return (
    <>
      <Heading>Project Overview</Heading>
      <Link href={"/projects/new"}>+</Link>
      <ProjectList />
    </>
  );
}
