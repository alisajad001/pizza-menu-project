import Pizza from "./Pizza";

const Menu = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col items-center">
      <h2 className="mx-auto py-2 mt-5 text-2xl uppercase font-salsa border-y-2 border-black w-32">
        Our menu
      </h2>

      <div className="mt-12 flex justify-center items-center flex-col gap-10 md:flex-row flex-wrap">
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
        <Pizza />
      </div>
    </div>
  );
};

export default Menu;
