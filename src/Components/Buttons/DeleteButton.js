import products from "../../products";
import { Btn } from "../../styles";
const DeleteButton = (props) => {
  const handleDelete = () => {
    {
      props.deleteProduct(props.product.id);
      props.setProduct(null);
    }
  };
  return <Btn onClick={handleDelete}>delete</Btn>;
};
export default DeleteButton;
