import styled from "styled-components";
import ProjectList from "@/components/ProjectList";
import { StyledToggleButton } from "@/components/Buttons";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";

const StyledMainHeadline = styled.h1`
  margin-block: 1rem;
  margin-inline: 1.5rem;
  text-align: center;
  color: var(--color-brand-900);
`;

export default function ProjectsOverviewPage() {
  const { data: session } = useSession();
  if (!session) {
    return <p>No session</p>;
  }

  const { theme, setTheme } = useTheme();

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
