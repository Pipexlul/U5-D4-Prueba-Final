import IngredientsList from "./IngredientsList";
import PizzaCardButtonGroup from "./PizzaCardButtonGroup";

import { capitalizeString } from "../utils/stringUtils";
import { formatNumToCLP } from "../utils/currencyUtils";

const PizzaCard = ({ name, desc, ingredients, img, price }) => {
  return (
    <section className="max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700">
      <img className="rounded-t-lg" src={img} alt={`Foto de pizza ${name}`} />
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {capitalizeString(name)}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400">{desc}</p>
        <IngredientsList ingredientsArray={ingredients} />
        <h3 className="mb-3 text-4xl font-bold tracking-tight text-gray-300 text-center">
          {formatNumToCLP(price)}
        </h3>
        <PizzaCardButtonGroup />
      </div>
    </section>
  );
};

export default PizzaCard;