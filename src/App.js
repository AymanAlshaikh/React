import Home from "./Components/Home";
import products from "./products";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/Details";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import { GlobalStyle } from "./styles";
const theme = {
  backgroundcolor: "silver",
};
function App() {
  const [product, setProduct] = useState(null);
  const setView = () => {
    if (product === null) {
      return <ProductList setProduct={setProduct} />;
    } else {
      return <ProductDetail product={product} setProduct={setProduct} />;
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      {setView()}
    </ThemeProvider>
  );
}

export default App;
