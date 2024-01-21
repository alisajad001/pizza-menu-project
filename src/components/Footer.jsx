const Footer = () => {
  const getHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = getHour >= openHour && getHour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="text-center py-12 border-t-4 border-yellow-500">
      <p className="text-xl">
        {new Date().toLocaleTimeString()} We&apos;re now open come and order.
      </p>
      <button className="bg-yellow-500 hover:bg-yellow-600 transition rounded-md p-3 text-white mt-7">
        Order Now
      </button>
    </footer>
  );
};

export default Footer;
