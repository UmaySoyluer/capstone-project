import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { HiArrowRightOnRectangle } from "react-icons/hi2";

const StyledWrapper = styled.div`
  background-color: var(--color-gray-100);
  margin: 2rem auto;
  width: 90%;
  display: flex;
  padding: 3rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

const StyledInfoWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  background-color: var(--color-gray-50);
  font-size: 0.8rem;
`;

const StyledImage = styled(Image)`
  margin-bottom: 1rem;
`;

const StyledImageWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  background-color: var(--color-gray-100);
`;

const StyledBoardlink = styled(Link)`
  background-color: var(--color-brand-600);
  color: var(--color-gray-50);
  border-radius: 10px;
  padding: 0.5rem;
  transition: 0.3s;

  &:hover {
    background-color: var(--color-brand-800);
  }
`;

const StyledLogOutButton = styled.button`
  border: none;
  position: fixed;
  right: 1.4rem;
  top: 2.1rem;
  background: transparent;
`;

export default function ProfilePage() {
  const { data: session } = useSession({ required: true });

  if (session) {
    return (
      <>
        <StyledLogOutButton>
          <HiArrowRightOnRectangle
            size={36}
            title="log out"
            color={"var(--color-brand-600)"}
            onClick={() => signOut()}
          />
        </StyledLogOutButton>
        <StyledWrapper>
          <StyledImageWrapper>
            <StyledImage
              src={session.user.image}
              alt="Picture of the user"
              width={80}
              height={80}
            />
            <h3>
              <b>{session.user.name}</b>
            </h3>
          </StyledImageWrapper>

          <StyledInfoWrapper>
            <p>
              Contact : <b>{session.user.email}</b>
            </p>
          </StyledInfoWrapper>
          <div>
            <StyledBoardlink href={"/ProjectsOverview"}>
              Go to my Board
            </StyledBoardlink>
          </div>
        </StyledWrapper>
      </>
    );
  } else {
    return (
      <div>
        <p>You're not signed in.</p>
      </div>
    );
  }
}
