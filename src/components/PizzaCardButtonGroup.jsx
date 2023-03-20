import PizzaCardAmountButton from "./PizzaCardAmountButton";

import { useNavigate } from "react-router-dom";

const PizzaCardButtonGroup = ({ pizzaId }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between">
      <button
        type="button"
        onClick={() => navigate(`/pizza/${pizzaId}`)}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-emerald-600 hover:bg-emerald-700 focus:ring-emerald-800"
      >
        Ver Detalles
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <PizzaCardAmountButton id={pizzaId} />
    </div>
  );
};

export default PizzaCardButtonGroup;
