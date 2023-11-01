import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import ProjectsOverviewPage from "@/pages/ProjectsOverview";
import { customRender } from "@/testing-library-utils";
import { useSession } from "next-auth/react";
import mockRouter from "next-router-mock";

describe("ProjectsOverviewPage page when signed in", () => {
  beforeEach(async () => {
    useSession.mockReturnValue({
      data: {
        user: {
          email: "foo@bar.com",
        },
      },
    });
    customRender(<ProjectsOverviewPage />);

    await waitForElementToBeRemoved(() => screen.getByTestId("spinnerId"));
  });

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", {
      name: /project overview/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

describe("ProjectsOverviewPage page when signed out", () => {
  beforeEach(async () => {
    useSession.mockReturnValue({ status: "unauthenticated" });
    customRender(<ProjectsOverviewPage />);

    await waitForElementToBeRemoved(() => screen.getByTestId("spinnerId"));
  });

  test("redirect to login page", () => {
    expect(mockRouter.asPath).toEqual("/SignIn");
  });
});
