import { rest } from "msw";
import { newUsersMockApi, usersMock } from "../mocks/mocksData";

export const handlers = [
  rest.get(`${import.meta.env.VITE_API_PEOPLE_URL}people`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(usersMock));
  }),

  rest.post(
    `${import.meta.env.VITE_API_PEOPLE_URL}people`,
    (_req, res, ctx) => {
      return res(ctx.status(201), ctx.json(newUsersMockApi));
    },
  ),
];

export const errorHandlers = [
  rest.get(`${import.meta.env.VITE_API_PEOPLE_URL}people`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get any user"));
  }),

  rest.post(
    `${import.meta.env.VITE_API_PEOPLE_URL}people`,
    (_req, res, ctx) => {
      return res(ctx.status(404, "Couldn't add user"));
    },
  ),
];
