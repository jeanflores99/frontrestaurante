import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutDesktop } from "@components/Layout/LayoutDesktop";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <LayoutDesktop>
        <Component {...pageProps}  />
      </LayoutDesktop>
    </>
  );
}

export default MyApp;
