import pizzaImg from "../assets/pizzas/margherita.jpg";

const Pizza = () => {
  return (
    <div>
      <img src={pizzaImg} />
      <h2>Pizza Name</h2>
      <p>Tomato, mozorilla, spinach</p>
    </div>
  );
};

export default Pizza;
