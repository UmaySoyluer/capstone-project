import "@testing-library/jest-dom";
import "isomorphic-fetch";
import { server } from "./mocks/server";

const mockAuth = jest.mock("next-auth/react");

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  mockAuth.resetAllMocks();
});
afterAll(() => server.close());
