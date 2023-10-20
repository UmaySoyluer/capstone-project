import ProjectList from "@/components/ProjectList";
import styled from "styled-components";
import { StyledToggleButton } from "@/components/Buttons";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const StyledMainHeadline = styled.h1`
  margin-block: 1rem;
  margin-inline: 1.5rem;
  text-align: center;
  color: var(--color-brand-900);
`;

export default function ProjectsOverviewPage() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <>
      <StyledToggleButton
        type="checkbox"
        id="toggle"
        onChange={toggleTheme}
      ></StyledToggleButton>
      <StyledMainHeadline>Project Overview</StyledMainHeadline>
      <ProjectList />
    </>
  );
}
