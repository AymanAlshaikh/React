import ProductItem from "./ProductItem";
import products from "../products";
function ProductList() {
  const items = products.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });
  return <div>{items}</div>;
}

export default ProductList;
