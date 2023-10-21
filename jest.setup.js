import "@testing-library/jest-dom";
// import "whatwg-fetch";
import "isomorphic-fetch";
import { server } from "./mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
