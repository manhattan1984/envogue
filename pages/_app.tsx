import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Container, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
import TheAppbar from "../Component/TheAppbar";
import { envogueTheme } from "../styles/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={envogueTheme}>
      <CssBaseline />
      <Container>
        <TheAppbar />
        <Toolbar />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
