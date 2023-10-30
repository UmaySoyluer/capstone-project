import Link from "next/link";
import styled from "styled-components";
import { StyledToggleButton } from "../Buttons";
import { useTheme } from "next-themes";
import {
  HiOutlineDocument,
  HiOutlineHome,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineUser,
} from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7vh;
  padding-inline: 1.5rem;
  display: flex;
  align-items: center;
  border-top: 1px solid var(--color-gray-300);
  background-color: var(--color-gray-50);
  z-index: 1;
`;

const StyledNavigationLink = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: var(--color-brand-900);
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NavigationMobile() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <StyledNavigation>
        <StyledList>
          <StyledListItem>
            <StyledNavigationLink href={"/"}>
              <HiOutlineHome
                size={26}
                style={{ color: "var(--color-brand-900)" }}
              />
            </StyledNavigationLink>
          </StyledListItem>
          <StyledListItem>
            <StyledNavigationLink href={"/"}>
              <RxDashboard
                size={26}
                style={{ color: "var(--color-brand-900)" }}
              />
            </StyledNavigationLink>
          </StyledListItem>

          <StyledListItem>
            <StyledToggleButton
              variant="mobile"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <>
                {theme === "light" ? (
                  <HiOutlineMoon
                    size={26}
                    style={{ color: "var(--color-brand-900)" }}
                  />
                ) : (
                  <HiOutlineSun
                    size={26}
                    style={{ color: "var(--color-brand-900)" }}
                  />
                )}
              </>
            </StyledToggleButton>
          </StyledListItem>
          <StyledListItem>
            <StyledNavigationLink href={"/account"}>
              <HiOutlineUser
                size={26}
                style={{ color: "var(--color-brand-900)" }}
              />
            </StyledNavigationLink>
          </StyledListItem>
        </StyledList>
      </StyledNavigation>
    </>
  );
}
