import ProductItem from "./ProductItem";
//import products from "../products";

function ProductList(props) {
  const items = props.products.map((product) => {
    return (
      <ProductItem
        key={product.id}
        product={product}
        setProduct={props.setProduct}
        deleteProduct={props.deleteProduct}
      />
    );
  });
  return <div>{items}</div>;
}

export default ProductList;
