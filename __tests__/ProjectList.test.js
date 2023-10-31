import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { customRender } from "@/testing-library-utils";
import { useSession } from "next-auth/react";
import ProjectList from "@/components/ProjectList";

describe("ProjectsList when signed in", () => {
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
});
