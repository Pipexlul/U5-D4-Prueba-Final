import PizzaCard from "../components/PizzaCard";

import pizzaData from "../data/pizzas.json";

const firstPizza = pizzaData[0];

const Home = () => {
  return (
    <div>
      <PizzaCard {...firstPizza} />
    </div>
  );
};

export default Home;
