function ProductItem(props) {
  return (
    <div className="imgContainer">
      <img src={props.product.pic} />
      <h3>{props.product.name}</h3>
      <h3>{props.product.price}</h3>
    </div>
  );
}

export default ProductItem;
