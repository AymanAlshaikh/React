import { Pics, Details, Sidebyside, Btn } from "../styles";
import ProductItem from "./ProductItem";
import products from "../products";
import DeleteButton from "./Buttons/DeleteButton";
const ProductDetail = (props) => {
  return (
    <Sidebyside>
      <button onClick={() => props.setProduct(null)}>Back</button>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        product={props.product}
        setProduct={props.setProduct}
      />
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
