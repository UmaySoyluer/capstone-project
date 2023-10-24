import { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import { ThemeProvider } from "next-themes";
import GlobalStyle from "../styles";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        <Toaster
          toastOptions={{ duration: 2500, style: { color: "#1e3a8a" } }}
        />
      </ThemeProvider>
    </SWRConfig>
  );
}
