import { Title, Description, Pics } from "../styles";
function Home() {
  return (
    <div>
      <Title>Mad Bun Bakery</Title>
      <Description>Freshly Baked, Anytime!</Description>
      <Pics
        src="https://www.foodics.com/wp-content/uploads/2018/04/bakery-1.jpg"
        className="App-logo"
        alt="logo"
      />
    </div>
  );
}

export default Home;
