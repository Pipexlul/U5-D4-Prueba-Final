const PizzaCardAmountButton = () => {
  return (
    <div className="inline-flex place-content-center border divide-x rounded divide-gray-800 border-gray-700">
      <button
        type="button"
        className="w-10 h-10 leading-10 transition hover:opacity-90 text-gray-300 bg-red-400/40 hover:bg-red-400/75 text-2xl"
      >
        -
      </button>

      <span>
        <input
          type="number"
          id="quantity"
          value="0"
          className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] bg-gray-900 text-white sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
        />
      </span>

      <button
        type="button"
        className="w-10 h-10 leading-10 transition hover:opacity-90 text-gray-300 bg-green-400/40 hover:bg-green-400/75 text-2xl"
      >
        +
      </button>
    </div>
  );
};

export default PizzaCardAmountButton;
