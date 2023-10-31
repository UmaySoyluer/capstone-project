import { rest } from "msw";

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

  rest.get("/api/projects/1", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(100),
      ctx.json({
        title: "Super Project",
        description: "Lorem ipsum dolor sit amet",
        endDate: "15.05.2025",
        department: "RnD",
        teamLead: "Mr X",
      })
    );
  }),

  rest.get("/api/projects/2", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(100),
      ctx.json({
        title: "Mega Project",
        description: "Lorem ipsum dolor sit amet",
        endDate: "20.05.2024",
        department: "Marketing",
        teamLead: "Mr Y",
      })
    );
  }),
];
