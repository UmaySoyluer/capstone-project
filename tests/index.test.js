import { render, screen } from "@testing-library/react";
import ProjectsOverviewPage from "@/pages/index";

describe("Home page", () => {
  beforeEach(() => {
    render(<ProjectsOverviewPage />);
  });

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", {
      name: /project overview/i,
    });

    expect(heading).toBeInTheDocument();
  });

  // it("renders a list of projects", async () => {
  //   const projectList = await screen.findAllByRole("listitem");

  //   expect(projectList).toBeGreaterThan(0);
  // });
});
