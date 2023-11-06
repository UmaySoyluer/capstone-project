import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import { customRender } from "@/testing-library-utils";
import { useSession } from "next-auth/react";
import ProjectDetailPage from "@/pages/projects/[id]";
import mockRouter from "next-router-mock";
import { createDynamicRouteParser } from "next-router-mock/dynamic-routes";
import * as getWidth from "@/hooks/useWindowDimensions";

describe("ProjectDetailPage when signed in", () => {
  beforeEach(async () => {
    useSession.mockReturnValue({
      data: {
        user: {
          email: "foo@bar.com",
        },
      },
    });

    mockRouter.useParser(createDynamicRouteParser(["/projects/[id]"]));

    // customRender(<ProjectDetailPage />);
    mockRouter.push("/projects/1");

    await waitForElementToBeRemoved(() => screen.getByTestId("spinnerId"));
  });

  it("renders project info", () => {
    // jest
    //   .spyOn(getWidth, "useDimensions")
    //   .mockImplementation(() => [600, jest.fn()]);

    const projectTitle = screen.getByRole("heading", {
      name: /super project/i,
    });
  });
});

describe("ProjectDetailPage page when signed out", () => {
  beforeEach(async () => {
    useSession.mockReturnValue({ status: "unauthenticated" });
    customRender(<ProjectDetailPage />);

    await waitForElementToBeRemoved(() => screen.getByTestId("spinnerId"));
  });

  test("redirect to login page", () => {
    expect(mockRouter.asPath).toEqual("/SignIn");
  });
});
