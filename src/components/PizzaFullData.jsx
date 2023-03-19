import { useState, useEffect, useContext } from "react";
import PizzaContext from "../contexts/PizzaContext";

import PizzaCardAmountButton from "./PizzaCardAmountButton";
import IngredientsList from "./IngredientsList";

import { formatNumToCLP } from "../utils/currencyUtils";
import { capitalizeString } from "../utils/stringUtils";
import { isEmpty } from "../utils/objectUtils";

const PizzaFullData = ({ id }) => {
  const [currentPizzaData, setCurrentPizzaData] = useState({});
  const { getDBPizzaData } = useContext(PizzaContext);

  useEffect(() => {
    const dbData = getDBPizzaData(id);

    setCurrentPizzaData(dbData);
  }, [id]);

  const { name, desc, ingredients, img, price } = currentPizzaData;

  if (isEmpty(currentPizzaData)) {
    return null;
  }

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div>
          <h1 className="text-2xl font-bold lg:text-3xl text-white">
            {capitalizeString(name)}
          </h1>

          <p className="mt-1 text-sm text-gray-500">ID: {id}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
              <img
                alt={`Foto de pizza ${name}`}
                src={img}
                className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
              />
            </div>
          </div>

          <div className="space-y-4 lg:pt-8 h-full flex flex-col items-center justify-center gap-y-10">
            <IngredientsList ingredientsArray={ingredients} />

            <div>
              <h4 className="text-2xl font-semibold text-white">Precio:</h4>
              <p className="text-2xl font-bold text-white mb-5">
                {formatNumToCLP(price)}
              </p>
              <PizzaCardAmountButton />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="prose text-gray-400 max-w-none">
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PizzaFullData;
