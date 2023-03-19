import { useNavigate } from "react-router-dom";

import { formatNumToCLP } from "../utils/currencyUtils";

const numTest = 1421412;
const totalPrice = numTest;

const CartButton = ({ label, labelColor, bgColor, bgColorEmpty, cartPath }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`${
        totalPrice > 0 ? bgColor : bgColorEmpty
      } ${labelColor} font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
      type="button"
      onClick={() => navigate(cartPath)}
    >
      <span>{label}</span>
      <span className="text-lg">{formatNumToCLP(numTest)}</span>
    </button>
  );
};

export default CartButton;
