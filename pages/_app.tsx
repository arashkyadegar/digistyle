import myAppContext from "@/components/context/context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const [navbarW, setNavbarW] = useState(false);
  const [navbarShow, setNavbarShow] = useState(false);
  return (
    <myAppContext.Provider
      value={{navbarShow,
        setNavbarShow,
        navbarW,
        setNavbarW,
      }}
    >
      <Component {...pageProps} />
    </myAppContext.Provider>
  );
}
