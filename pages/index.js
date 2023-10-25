import Link from "next/link";

import Heading from "@/components/Heading";

export default function HomePage() {
  return (
    <>
      <Heading>About the Application</Heading>
      <Link href={"/ProjectsOverview"}>Project Overview</Link>
    </>
  );
}
