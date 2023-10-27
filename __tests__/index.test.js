import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockRouter from "next-router-mock";

import { customRender } from "@/testing-library-utils";
import HomePage from "@/pages/index";

describe("Home page", () => {
  const user = userEvent.setup();

  beforeEach(async () => {
    customRender(<HomePage />);
  });

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", {
      name: /about the application/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders ProjectsOverview page when link clicked", async () => {
    const callToActionLink = screen.getByRole("link", {
      name: /start now/i,
    });

    await user.click(callToActionLink);

    expect(mockRouter.asPath).toEqual("/ProjectsOverview");
  });
});
