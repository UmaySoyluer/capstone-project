import styled from "styled-components";
import ProjectList from "@/components/ProjectList";
import { StyledToggleButton } from "@/components/Buttons";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const StyledMainHeadline = styled.h1`
  margin-block: 1rem;
  margin-inline: 1.5rem;
  text-align: center;
  color: var(--color-brand-900);
`;

export default function ProjectsOverviewPage() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      router.push("/SignIn");
    }
  }, [session]);

  return (
    <>
      <StyledToggleButton
        type="checkbox"
        id="toggle"
        onChange={() => setTheme(theme === "light" ? "dark" : "light")}
      ></StyledToggleButton>
      <StyledMainHeadline>Project Overview</StyledMainHeadline>
      <ProjectList />
    </>
  );
}
