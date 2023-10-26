import { render } from "@testing-library/react";
import { SWRConfig } from "swr";
import fetcher from "./lib/fetcher";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

const AllTheProviders = ({ children }) => {
  return (
    <SWRConfig
      value={{ dedupingInterval: 0, provider: () => new Map(), fetcher }}
    >
      <MemoryRouterProvider> {children}</MemoryRouterProvider>
    </SWRConfig>
  );
};

export const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });
