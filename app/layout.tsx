"use client";

import { GlobalStyle } from "@styles/globals";
import "@styles/globals.css";

import { AppProps } from "next/app";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface ILayoutProps extends AppProps {
  children: ReactNode;
}

interface IMetadata {
  title: string;
  description: string;
}

export const metadata: IMetadata = {
  title: "App Tittle",
  description: "App description",
};

const RootLayout = ({ children, Component, pageProps }: ILayoutProps) => (
  <html lang="en">
    <body>
      <ThemeProvider theme={{}}>
        <GlobalStyle />
        <main>
          {children}
          {/* <Component {...pageProps} /> */}
        </main>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
