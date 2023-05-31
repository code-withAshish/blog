import LayoutWrapper from "@/components/LayoutWrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </div>
  );
}
