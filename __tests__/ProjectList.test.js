import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { customRender } from "@/testing-library-utils";
import { useSession } from "next-auth/react";
import userEvent from "@testing-library/user-event";
import ProjectList from "@/components/ProjectList";

describe("ProjectsList when signed in", () => {
  const user = userEvent.setup();

  beforeEach(async () => {
    useSession.mockReturnValueOnce([
      {
        user: {
          email: "foo@bar.com",
        },
      },
      false,
    ]);
    customRender(<ProjectList />);

    await waitForElementToBeRemoved(() => screen.getByTestId("spinnerId"));
  });

  it("renders a list of projects", () => {
    const superProject = screen.getByText(/super project/i);
    const megaProject = screen.getByText(/mega project/i);

    expect(superProject).toBeInTheDocument();
    expect(megaProject).toBeInTheDocument();
  });

  it("renders a list of links", () => {
    const superProjectLink = screen.getByRole("link", {
      name: /super project/i,
    });
    const megaProjectLink = screen.getByRole("link", {
      name: /mega project/i,
    });

    expect(superProjectLink).toHaveAttribute("href", "/projects/1");
    expect(megaProjectLink).toHaveAttribute("href", "/projects/2");
  });

  it("render a project page by project link click", async () => {
    const superProjectLink = screen.getByRole("link", {
      name: /super project/i,
    });

    await user.click(superProjectLink);

    const superProjectEndDate = screen.getByRole("heading", {
      name: "15.05.2025",
    });

    expect(superProjectEndDate).toBeInTheDocument();
  });
});
