import { Pics, Details, Sidebyside } from "../styles";
import ProductItem from "./ProductItem";
import products from "../products";
const ProductDetail = (props) => {
  return (
    <Sidebyside>
      <button onClick={() => props.setProduct(null)}>Back</button>
      <Pics
        onClick={() => props.setProduct(props.product)}
        src={props.product.pic}
      />
      <Details>{props.product.name}</Details>
      <Details>{props.product.price}</Details>
      <Details>{props.product.description}</Details>
    </Sidebyside>
  );
};

export default ProductDetail;
