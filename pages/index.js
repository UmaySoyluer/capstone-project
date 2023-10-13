import Heading from "@/components/Heading";
import ProjectList from "@/components/ProjectList";
import Link from "next/link";

export default function ProjectsOverviewPage() {
  return (
    <>
      <h1>Project Overview</h1>
      <Link href={"/projects/new"}>+</Link>
      <ProjectList />
    </>
  );
}
