import "@testing-library/jest-dom";
import "isomorphic-fetch";
import { server } from "./mocks/server";

jest.mock("next-auth/react");

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
