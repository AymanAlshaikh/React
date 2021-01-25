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
  const [_products, setProducts] = useState(products);
  const [product, setProduct] = useState(null);

  const deleteProduct = (productID) => {
    const filteredID = _products.filter((product) => product.id !== productID);
    setProducts(filteredID);
  };

  const setView = () => {
    if (product === null) {
      return (
        <ProductList
          setProduct={setProduct}
          products={_products}
          deleteProduct={deleteProduct}
        />
      );
    } else {
      return (
        <ProductDetail
          product={product}
          setProduct={setProduct}
          deleteProduct={deleteProduct}
        />
      );
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
