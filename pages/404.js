import Image from "next/image";
import { BackLink } from "@/components/Buttons";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const StyledBackLinkContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMessage = styled.p`
  font-size: 1.5rem;
  margin-top: 20px;
`;

const ErrorPage = () => {
  return (
    <StyledContainer>
      <StyledBackLinkContainer>
        <BackLink />
      </StyledBackLinkContainer>
      <StyledImageContainer>
        <Image
          src="/images/error-image.png"
          alt="An error has occurred"
          width={400}
          height={400}
        />
      </StyledImageContainer>
      <StyledMessage>404 page not found!</StyledMessage>
    </StyledContainer>
  );
};

export default ErrorPage;
