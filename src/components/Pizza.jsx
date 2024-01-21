import pizzaImg from "../assets/pizzas/margherita.jpg";

const Pizza = () => {
  return (
    <div className="flex items-center gap-6">
      <img src={pizzaImg} className="w-28 rounded-md" />

      <div>
        <h2 className="text-xl">Margherita</h2>
        <p className="text-gray-600 font-light">Tomato, mozorilla, spinach</p>
        <p className="text-sm mt-6">$19.33</p>
      </div>
    </div>
  );
};

export default Pizza;
