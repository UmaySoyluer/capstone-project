import { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
