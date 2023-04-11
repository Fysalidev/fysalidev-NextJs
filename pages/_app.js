import { useState, createContext } from "react";
import StoreProvider from "@/components/context/StoreProvider";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [nameContext, setNameContext] = useState("Fysalidev");
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
