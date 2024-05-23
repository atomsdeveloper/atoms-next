import P from "prop-types";

import { theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  )
}
export default App;

App.propTypes = {
  Component: P.elementType.isRequired,
  pageProps: P.any,
}