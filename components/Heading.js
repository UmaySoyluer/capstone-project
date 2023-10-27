import styled from "styled-components";

const StyledHading = styled.h2`
  font-size: 1.5rem;
  color: var(--color-brand-900);
`;

export default function Heading({ children }) {
  return <StyledHading>{children}</StyledHading>;
}
