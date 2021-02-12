import Home from "./Components/Home";

import products from "./products";
import ProductList from "./Components/ProductList";
import ProductDetail from "./Components/Details";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

import { GlobalStyle } from "./styles";
import NavBar from "./Components/NavBar";
import { Route, Switch } from "react-router";
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

  /*const setView = () => {
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
  };*/

  return (
    <ThemeProvider theme={theme}>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossorigin="anonymous"
      ></link>
      <NavBar />

      <GlobalStyle />
      <Switch>
        <Route path="/products">
          <ProductList
            setProduct={setProduct}
            products={_products}
            deleteProduct={deleteProduct}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      ></script>
    </ThemeProvider>
  );
}

export default App;
