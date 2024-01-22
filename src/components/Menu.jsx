import pizzaData from "../data";
import Pizza from "./Pizza";

const Menu = () => {
  return (
    <div className="p-4 bg-yellow-50 pb-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="mx-auto py-2 mt-5 text-2xl uppercase font-salsa border-y-2 border-black w-32">
          Our menu
        </h2>

        <div className="mt-12 flex justify-center flex-col gap-10 md:flex-row flex-wrap">
          {pizzaData.map((pizza, key) => {
            return (
              <Pizza
                key={key}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                imgUrl={pizza.url}
                soldOut={pizza.soldOut}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
