import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { StyledToggleButton } from "../Buttons";
import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";

const StyledNavigation = styled.nav`
  width: 100%;
  height: 70px;
  padding-inline: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-300);
`;

const StyledNavigationLink = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: var(--color-brand-900);
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background-color: var(--color-brand-700);
    color: var(--color-gray-50);
  }
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StyledUserBar = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export default function NavigationDesktop() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <StyledNavigation>
        <StyledContainer>
          <Link href={"/"}>
            <Image
              src={
                theme === "light"
                  ? "/images/logo.svg"
                  : "/images/logo-dark-theme.svg"
              }
              alt="Home"
              width={200}
              height={200}
            />
          </Link>

          <StyledNavigationLink href={"/ProjectsOverview"}>
            Projects
          </StyledNavigationLink>
        </StyledContainer>

        <StyledUserBar>
          <StyledToggleButton
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            <>
              {theme === "light" ? (
                <HiOutlineMoon
                  size={30}
                  style={{ color: "var(--color-brand-900)" }}
                />
              ) : (
                <HiOutlineSun
                  size={30}
                  style={{ color: "var(--color-brand-900)" }}
                />
              )}
            </>
          </StyledToggleButton>
          <StyledNavigationLink href={"/account"}>User</StyledNavigationLink>
        </StyledUserBar>
      </StyledNavigation>
    </>
  );
}
