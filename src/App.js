import "./App.css";
import products from "./products";
function App() {
  const items = products.map((product) => {
    return (
      <div className="imgContainer">
        <img src={product.pic} />
        <h3>{product.name}</h3>
        <h3>{product.price}</h3>
      </div>
    );
  });
  return (
    <div className="page">
      <h1>Mad Bun Bakery</h1>
      <h2>Freshly Baked, Anytime!</h2>
      <img
        src="https://www.foodics.com/wp-content/uploads/2018/04/bakery-1.jpg"
        className="App-logo"
        alt="logo"
      />
      <div>{items}</div>
    </div>
  );
}

export default App;
