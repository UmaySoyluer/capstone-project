import styled from "styled-components";

const StyledHading = styled.h2`
  font-size: 2rem;
  margin-left: 1rem;
  margin-block: 0.5rem;
`;

export default function Heading({ children }) {
  return <StyledHading>{children}</StyledHading>;
}
