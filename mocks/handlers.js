import { rest, HttpResponse } from "msw";

export const handlers = [
  rest.get("/api/projects", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(100),
      ctx.json([
        { _id: "1", title: "Super Project" },
        { _id: "2", title: "Mega Project" },
      ])
    );
  }),
  //   rest.get("/api/projects/1", (req, res, ctx) => {
  //     return res(ctx.delay(100), ctx.json([`Super Project`, `Mega Project`]));
  //   }),

  //   rest.get("/api/projects/2", (req, res, ctx) => {
  //     return res(ctx.delay(100), ctx.json([`Media Project`, `Normal Project`]));
  //   }),
];
