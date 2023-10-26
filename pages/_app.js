import { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import { ThemeProvider } from "next-themes";
import GlobalStyle from "../styles";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Toaster
          toastOptions={{ duration: 2500, style: { color: "#1e3a8a" } }}
        />
      </ThemeProvider>
    </SWRConfig>
  );
}
