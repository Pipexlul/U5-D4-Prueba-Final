import { useContext } from "react";

import PizzaContext from "../contexts/PizzaContext";

import PizzaCardAmountButton from "./PizzaCardAmountButton";

import { formatNumToCLP } from "../utils/currencyUtils";
import { capitalizeString, injectStyle } from "../utils/stringUtils";

const itemChildrenReqStyles = injectStyle("px-5 first:pl-0 last:pr-0");

const CheckoutItem = ({ name, img, price, ingredients, id }) => {
  const { getSubtotalForPizza } = useContext(PizzaContext);

  return (
    <li className="flex items-center py-4 divide-x divide-gray-500/75">
      <img
        src={img}
        alt={`Foto de pizza ${name}`}
        className={itemChildrenReqStyles("h-20 w-auto rounded object-cover")}
      />

      <div className={itemChildrenReqStyles()}>
        <h3 className="text-xl text-amber-300 mb-3 break-words max-w-[8rem]">
          {capitalizeString(name)}
        </h3>

        <div>
          <p className="text-white">Ingredientes:</p>
          <ul className="list-disc pl-5">
            {ingredients.map((ingredient) => (
              <li
                className="marker:text-blue-400 text-gray-300 text-xs"
                key={ingredient}
              >
                {capitalizeString(ingredient)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={itemChildrenReqStyles()}>
        <p className="text-white">Precio Unitario:</p>
        <p className="text-white">{formatNumToCLP(price)}</p>
      </div>

      <div className={itemChildrenReqStyles()}>
        <PizzaCardAmountButton id={id} />
      </div>

      <div className={itemChildrenReqStyles("text-white")}>
        <p className="">Subtotal:</p>
        <span className="text-lg">
          {formatNumToCLP(getSubtotalForPizza(id))}
        </span>
      </div>
    </li>
  );
};

export default CheckoutItem;
