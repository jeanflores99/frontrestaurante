import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LayoutDesktop } from "@components/Layout/LayoutDesktop";
import { Provider } from 'react-redux'
import { store, wrapper } from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider
      store={store}
    >
      <LayoutDesktop>
        <Component {...pageProps} />
      </LayoutDesktop>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);

