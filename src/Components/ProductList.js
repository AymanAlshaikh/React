import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";

import { useState } from "react";
//import products from "../products";

function ProductList(props) {
  const [query, setQuery] = useState();
  const items = props.products
    .filter((product) => product.name.toLocaleLowerCase().includes(query))
    .map((product) => {
      <ProductItem
        key={product.id}
        product={product}
        setProduct={props.setProduct}
        deleteProduct={props.deleteProduct}
      />;
    });
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <div>{items}</div>
    </div>
  );
}

export default ProductList;
