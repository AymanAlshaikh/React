import ProductItem from "./ProductItem";
import products from "../products";
function ProductList(props) {
  const items = products.map((product) => {
    return (
      <ProductItem
        key={product.id}
        product={product}
        setProduct={props.setProduct}
      />
    );
  });
  return <div>{items}</div>;
}

export default ProductList;
