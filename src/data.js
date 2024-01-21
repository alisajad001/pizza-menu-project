import focacciaImg from "./assets/pizzas/focaccia.jpg";
import margeritaImg from "./assets/pizzas/margherita.jpg";
import spinaciImg from "./assets/pizzas/spinaci.jpg";
import funghiImg from "./assets/pizzas/funghi.jpg";
import salaminoImg from "./assets/pizzas/salamino.jpg";
import prosciuttoImg from "./assets/pizzas/prosciutto.jpg";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    url: focacciaImg,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    url: margeritaImg,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    url: spinaciImg,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    url: funghiImg,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    url: salaminoImg,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    url: prosciuttoImg,
    soldOut: false,
  },
];

export default pizzaData;
