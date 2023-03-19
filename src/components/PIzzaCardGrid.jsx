import PizzaCard from "./PizzaCard";

const PIzzaCardGrid = ({ pizzaData }) => {
  return (
    <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center">
      {pizzaData.map((pizza) => {
        return (
          <PizzaCard
            key={pizza.id}
            name={pizza.name}
            desc={pizza.desc}
            ingredients={pizza.ingredients}
            img={pizza.img}
            price={pizza.price}
          />
        );
      })}
    </div>
  );
};

export default PIzzaCardGrid;