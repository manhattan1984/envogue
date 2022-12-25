import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import TheAppbar from "../Component/TheAppbar";
import { envogueTheme } from "../styles/styles";
import Footer from "../Component/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={envogueTheme}>
      <ParallaxProvider>
        <CssBaseline />
        <TheAppbar />
        {/* <Toolbar /> */}
        <Component {...pageProps} />
        <Footer />
      </ParallaxProvider>
    </ThemeProvider>
  );
}
