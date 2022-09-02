import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import NextPage, { AppProps } from "next/app";
import Layout from "@components/Layout";
import { GlobalStyle, theme } from "@styles/globals";

function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return getLayout(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
