import PIzzaCardGrid from "../components/PIzzaCardGrid";

import pizzaData from "../data/pizzas.json";

const Home = () => {
  return (
    <div>
      <PIzzaCardGrid pizzaData={pizzaData} />
    </div>
  );
};

export default Home;
