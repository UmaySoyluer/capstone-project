import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import ProjectsOverviewPage from "@/pages/index";
import { customRender } from "@/testing-library-utils";

describe("Home page", () => {
  beforeEach(async () => {
    customRender(<ProjectsOverviewPage />);

    await waitForElementToBeRemoved(() => screen.getByTestId("spinnerId"));
  });

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", {
      name: /project overview/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders a list of projects", () => {
    const superProject = screen.getByText(/super project/i);
    const megaProject = screen.getByText(/mega project/i);

    expect(superProject).toBeInTheDocument();
    expect(megaProject).toBeInTheDocument();
  });
});
