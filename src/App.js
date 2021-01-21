import Home from "./Components/Home";
import ProductList from "./Components/ProductList";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles";
const theme = {
  backgroundcolor: "silver",
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Home />

      <ProductList />
    </ThemeProvider>
  );
}

export default App;
