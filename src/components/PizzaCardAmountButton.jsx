import { useContext } from "react";

import PizzaContext from "../contexts/PizzaContext";

const PizzaCardAmountButton = ({ id }) => {
  const { addOrRemovePizza, getSelectedPizzaAmount } = useContext(PizzaContext);

  return (
    <div className="inline-flex place-content-center border divide-x rounded divide-gray-800 border-gray-700">
      <button
        onClick={() => addOrRemovePizza(id, "subtract")}
        type="button"
        className="w-10 h-10 leading-10 transition hover:opacity-90 text-gray-300 bg-red-400/40 hover:bg-red-400/75 text-2xl"
      >
        -
      </button>

      <span className="flex justify-center items-center h-10 w-16 text-center bg-gray-900 text-white sm:text-sm lg:text-lg leading-10">
        {/* // POSSIBLE TODO: Maybe reintroduce an input if I ever come back to this project?
          <input
          type="number"
          value="0"
          className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] bg-gray-900 text-white sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />
        */}
        {getSelectedPizzaAmount(id)}
      </span>

      <button
        onClick={() => addOrRemovePizza(id, "add")}
        type="button"
        className="w-10 h-10 leading-10 transition hover:opacity-90 text-gray-300 bg-green-400/40 hover:bg-green-400/75 text-2xl"
      >
        +
      </button>
    </div>
  );
};

export default PizzaCardAmountButton;
