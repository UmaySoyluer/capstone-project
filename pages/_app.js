import { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import { ThemeProvider } from "next-themes";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}
