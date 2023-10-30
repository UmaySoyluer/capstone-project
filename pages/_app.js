import { SWRConfig } from "swr";
import fetcher from "@/lib/fetcher";
import { ThemeProvider } from "next-themes";
import GlobalStyle from "../styles";
import { Toaster } from "react-hot-toast";
import Layout from "@/components/Layout";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps, session }) {
  return (
    <SWRConfig value={{ fetcher }}>
      <SessionProvider session={session}>
        <ThemeProvider>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toaster
            toastOptions={{ duration: 2500, style: { color: "#1e3a8a" } }}
          />
        </ThemeProvider>
      </SessionProvider>
    </SWRConfig>
  );
}
