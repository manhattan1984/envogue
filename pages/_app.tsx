import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import TheAppbar from "../Component/TheAppbar";
import { envogueTheme } from "../styles/styles";
import Footer from "../Component/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={envogueTheme}>
      <CssBaseline />
      <TheAppbar />
      <Toolbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
