import useWindowDimensions from "@/hooks/useWindowDimensions";
import styled from "styled-components";

export const StyledModalContent = styled.div`
  border-radius: 10px;
  width: 90vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-gray-50);
  padding: 1rem 2rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const StyledModalContentDesktop = styled.div`
  border-radius: 10px;
  width: 450px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-gray-50);
  padding: 1rem 2rem;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export default function ModalContent({ children }) {
  const { width } = useWindowDimensions();
  return (
    <>
      {width <= 810 && <StyledModalContent>{children}</StyledModalContent>}
      {width > 810 && (
        <StyledModalContentDesktop>{children}</StyledModalContentDesktop>
      )}
    </>
  );
}
