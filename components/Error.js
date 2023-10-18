import Image from "next/image";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
`;

export default function Error({ message }) {
  console.log(message);
  return (
    <StyledContainer>
      <Image
        src="/images/error-image.png"
        alt="An error has occurred"
        width={200}
        height={200}
      />
      <p>Something went wrong!</p>
    </StyledContainer>
  );
}
