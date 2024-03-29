const Pizza = ({ name, ingredients, imgUrl, price, soldOut }) => {
  return (
    <div className="flex items-center gap-6 w-full sm:w-[300px]">
      <img src={imgUrl} className="w-28 rounded-md" />

      <div>
        <h2 className="text-xl">{name}</h2>
        <p className="text-gray-600 font-light text-sm md:text-base">
          {ingredients}
        </p>
        <p className="text-sm">{soldOut ? "sold out" : `$${price}`}</p>
      </div>
    </div>
  );
};

export default Pizza;
