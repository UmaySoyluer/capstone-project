import styled from "styled-components";

import Heading from "@/components/Heading";
import { CallToActionLink } from "@/components/Buttons";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { Carousel } from "@/components/Carousel";
import Image from "next/image";
import { useTheme } from "next-themes";

const StyledContainer = styled.div`
  margin: 1rem clamp(2rem, 10vw, 20rem);
  text-align: center;
`;

const StyledParagraph = styled.p`
  padding: 1rem 1rem;
  width: 100%;
  text-align: left;
  font-size: 1.2rem;
`;

const StyledList = styled.ul`
  padding: 1rem 1rem;
  width: 100%;
  list-style-type: none;
  text-align: left;
  font-size: 1.2rem;
`;

const StyledBrandName = styled.span`
  color: var(--color-brand-700);
  font-weight: bold;
  font-size: 1.4rem;
`;

export default function HomePage() {
  const { width } = useWindowDimensions();
  const { theme, setTheme } = useTheme();

  if (width <= 800) {
    return (
      <StyledContainer>
        <Heading>About the Application</Heading>

        <StyledParagraph>
          Welcome to the Future of Productivity:
        </StyledParagraph>

        <Image
          src={
            theme === "light"
              ? "/images/logo.svg"
              : "/images/logo-dark-theme.svg"
          }
          alt="ProFlow"
          width={200}
          height={200}
        />

        <StyledParagraph>
          Unlock the Power of Kanban for Ultimate Efficiency.
        </StyledParagraph>
        <StyledParagraph>
          Are you tired of juggling multiple tasks and projects without a clear
          roadmap to success? Say goodbye to chaos and hello to the organized
          world of Kanban boards!
        </StyledParagraph>
        <CallToActionLink href={"/ProjectsOverview"}>
          <span>🚀 Start Now!</span>
        </CallToActionLink>

        <StyledParagraph>
          Behind every great project is a dedicated team of developers, and our
          Kanban platform ProFlow is no exception. Meet the faces behind the
          innovation:
        </StyledParagraph>
        <Carousel />
        <CallToActionLink href={"/ProjectsOverview"}>
          <span>🤗 Boost Dev!</span>
        </CallToActionLink>

        <StyledParagraph>
          Whether you are an individual, a small team, or a large corporation,
          ProFlow is your key to streamlined productivity. Access your Kanban
          boards from anywhere, and wave goodbye to missed deadlines. Security,
          efficiency, and success - it is all within reach.
        </StyledParagraph>
        <CallToActionLink href={"/ProjectsOverview"}>
          <span>🌟 Try ProFlow Now!</span>
        </CallToActionLink>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <Heading>About the Application</Heading>
      <StyledParagraph>
        Welcome to <StyledBrandName>ProFlow</StyledBrandName>: Streamline Your
        Workflow with Kanban Boards. Unlock the Power of Visual Project
        Management. Are you tired of juggling multiple tasks, deadlines, and
        team members, struggling to keep your projects on track? Look no
        further. ProFlow is your solution to streamline your workflow, boost
        productivity, and achieve seamless project management.
      </StyledParagraph>
      <CallToActionLink href={"/ProjectsOverview"}>
        <span>🚀 Start Now!</span>
      </CallToActionLink>

      <StyledList>
        <li>
          <strong>Simplicity:</strong> ProFlow simplifies complex project
          management into an elegant and intuitive visual board. No more
          confusing spreadsheets or endless email threads.
        </li>
        <li>
          <strong>Collaboration:</strong>
          Collaborate effortlessly with your team, no matter where they are.
          Keep everyone on the same page and ensure transparency at every step.
        </li>
        <li>
          <strong>Efficiency:</strong> Improve efficiency by visualizing your
          workflow, identifying bottlenecks, and reducing waste. ProFlow helps
          you get things done, faster and with fewer resources.
        </li>
        <li>
          <strong>Customization:</strong>
          Tailor your Kanban boards to your unique needs. From simple to complex
          projects, ProFlow is adaptable to fit any workflow.
        </li>
      </StyledList>

      <CallToActionLink href={"/ProjectsOverview"}>
        <span>🤗 Boost Dev!</span>
      </CallToActionLink>

      <StyledParagraph>
        Behind every great project is a dedicated team of developers, and our
        Kanban platform ProFlow is no exception. Meet the faces behind the
        innovation:
      </StyledParagraph>

      <Carousel />

      <StyledList>
        <li>
          <strong>Mobile-Friendly Excellence.</strong> Worried about managing
          projects on the go? With ProFlow, you can relax. Our application is
          optimized for mobile devices, ensuring you have full control over your
          projects wherever you are. Experience the same seamless workflow and
          user-friendly interface on your smartphone or tablet.
        </li>
        <li>
          <strong>A Unique Solution to Your Problem.</strong> Tired of
          compromising between a simple agile-board and a mobile-friendly
          solution? ProFlow has you covered. We have solved the problem of
          finding a product that offers flexible layouts that not only work
          perfectly but also look fantastic on mobile devices. Say goodbye to
          clunky, hard-to-use mobile apps and embrace a truly agile, visually
          pleasing solution.
        </li>
      </StyledList>
      <CallToActionLink href={"/ProjectsOverview"}>
        <span>🌟 Try ProFlow Now!</span>
      </CallToActionLink>
    </StyledContainer>
  );
}
