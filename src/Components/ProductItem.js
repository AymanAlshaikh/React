import { Pics, Details, Sidebyside, Btn } from "../styles";
import DeleteButton from "./Buttons/DeleteButton";
function ProductItem(props) {
  return (
    <Sidebyside class="text-center">
      <Pics
        onClick={() => props.setProduct(props.product)}
        src={props.product.pic}
        height="200px"
        width="500"
      />
      <Details>{props.product.name}</Details>
      <Details>{props.product.price}</Details>
      <Details>{props.deleteProduct}</Details>
      <DeleteButton
        deleteProduct={props.deleteProduct}
        product={props.product}
        setProduct={props.setProduct}
      />
    </Sidebyside>
  );
}

export default ProductItem;
