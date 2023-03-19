import { capitalizeString } from "../utils/stringUtils";

const IngredientsList = ({ ingredientsArray }) => {
  return (
    <div className="mb-5">
      <h4 className="text-xl font-medium tracking-tight text-gray-300 mb-3">
        Ingredientes:
      </h4>
      <ul className="flex flex-col w-48 text-sm font-medium border rounded-lg bg-gray-700 border-gray-600 text-white list-disc mx-auto pl-10">
        {ingredientsArray.map((ingredient, idx) => {
          return (
            <li
              key={idx}
              className="w-full py-2 border-b first:rounded-t-lg last:rounded-b-lg border-gray-600 last:border-b-0 marker:text-emerald-500"
            >
              {capitalizeString(ingredient)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IngredientsList;
