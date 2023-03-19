import { useContext } from "react";

import PizzaContext from "../contexts/PizzaContext";

import PizzaCardGrid from "../components/PizzaCardGrid";

const Home = () => {
  const { pizzaData } = useContext(PizzaContext);

  return (
    <div>
      <PizzaCardGrid pizzaData={pizzaData} />
    </div>
  );
};

export default Home;
