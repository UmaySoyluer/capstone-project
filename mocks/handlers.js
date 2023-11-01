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
        endDate: "15.05.2025",
        department: "RnD",
        teamLead: "Mr X",
        columns: [
          {
            name: "To do",
            tasks: [
              {
                title: "Make a wish",
                description: "I want to fly away",
                tag: "To do",
                columnId: "11",
                createdAt: "2023-12-17T03:24:00",
                priority: [],
              },
            ],
          },
          {
            name: "QA",
            tasks: [],
          },
        ],
      })
    );
  }),

  rest.get("/api/projects/2", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(100),
      ctx.json({
        title: "Mega Project",
        endDate: "20.05.2024",
        department: "Marketing",
        teamLead: "Mr Y",
        columns: [
          {
            name: "Backlog",
            tasks: [
              {
                title: "Show effects",
                description: "I have something for you",
                tag: "Backlog",
                columnId: "22",
                createdAt: "2023-01-17T03:24:00",
                priority: ["new"],
              },
              {
                title: "Buy a fish",
                description: "We need more fishes",
                tag: "Backlog",
                columnId: "22",
                createdAt: "2023-02-17T03:24:00",
                priority: [],
              },
            ],
          },
        ],
      })
    );
  }),
];
