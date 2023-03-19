import { useParams } from "react-router-dom";

import PizzaFullData from "../components/PizzaFullData";

const DetailedPizza = () => {
  const { pizzaId } = useParams();

  return <PizzaFullData id={pizzaId} />;
};

export default DetailedPizza;
