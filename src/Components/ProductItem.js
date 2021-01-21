import { Pics, Details, Sidebyside } from "../styles";
function ProductItem(props) {
  return (
    <Sidebyside>
      <Pics src={props.product.pic} />
      <Details>{props.product.name}</Details>
      <Details>{props.product.price}</Details>
    </Sidebyside>
  );
}

export default ProductItem;
