import { rest } from "msw";
import { usersMock } from "../mocks/mocksData";

export const handlers = [
  rest.get(`${import.meta.env.VITE_API_PEOPLE_URL}people`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(usersMock));
  }),
];

export const errorHandlers = [
  rest.get(`${import.meta.env.VITE_API_PEOPLE_URL}people`, (_req, res, ctx) => {
    return res(ctx.status(404, "Can't get any user"));
  }),
];
