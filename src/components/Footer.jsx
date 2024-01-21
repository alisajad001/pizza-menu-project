const Footer = () => {
  const getHour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = getHour >= openHour && getHour <= closeHour;
  console.log(isOpen);

  return (
    <footer>
      <p>{getHour} We&apos;re now open come and order.</p>
      <button>Order Now</button>
    </footer>
  );
};

export default Footer;
