import { useContext } from "react";

import PizzaContext from "../contexts/PizzaContext";

import PIzzaCardGrid from "../components/PIzzaCardGrid";

const Home = () => {
  const { pizzaData } = useContext(PizzaContext);

  return (
    <div>
      <PIzzaCardGrid pizzaData={pizzaData} />
    </div>
  );
};

export default Home;
