import { createContext, useState, useEffect } from "react";

import { isEmpty } from "../utils/objectUtils";

import pizzaJson from "../data/pizzas.json";

const PizzaContext = createContext(null);

const PizzaContextProvider = ({ children }) => {
  const [pizzaDataLUT, setPizzaDataLUT] = useState({});
  const [pizzaData, setPizzaData] = useState(pizzaJson);
  const [totalToPay, setTotalToPay] = useState(0);

  const loadLUT = () => {
    const pizzaLUT = {};

    pizzaJson.forEach((pizza) => {
      pizzaLUT[pizza.id] = { dbData: pizza, state: { selectedAmount: 0 } }; // Look-up table for faster and easier accessing
    });

    setPizzaDataLUT(pizzaLUT);
  };

  useEffect(() => {
    loadLUT();
  }, []);

  useEffect(() => {
    const totalPrice = Object.values(pizzaDataLUT).reduce((acc, curr) => {
      return acc + curr.state.selectedAmount * curr.dbData.price;
    }, 0);

    setTotalToPay(totalPrice);
  }, [pizzaDataLUT]);

  const addOrRemovePizza = (pizzaId, mode) => {
    const newState = structuredClone(pizzaDataLUT);

    const curAmount = newState[pizzaId].state.selectedAmount;
    newState[pizzaId].state.selectedAmount =
      curAmount + (mode === "add" ? 1 : -1);

    if (newState[pizzaId].state.selectedAmount < 0) {
      newState[pizzaId].state.selectedAmount = 0;
    }

    setPizzaDataLUT(newState);
  };

  const getDBPizzaData = (pizzaId) => {
    return pizzaDataLUT[pizzaId]?.dbData;
  };

  const getDBPizzaDataAllSelected = () => {
    return Object.values(pizzaDataLUT)
      .filter((pizza) => pizza.state.selectedAmount > 0)
      .reduce((acc, curr) => {
        return acc.concat(curr.dbData);
      }, []);
  };

  const getSelectedPizzaAmount = (pizzaId) => {
    return pizzaDataLUT[pizzaId]?.state.selectedAmount;
  };

  const getSubtotalForPizza = (pizzaId) => {
    return getDBPizzaData(pizzaId).price * getSelectedPizzaAmount(pizzaId);
  };

  const getTotalSelectedPizzas = () => {
    return Object.values(pizzaDataLUT).reduce((acc, curr) => {
      return acc + curr.state.selectedAmount;
    }, 0);
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzaDataLUT,
        pizzaData,
        totalToPay,
        addOrRemovePizza,
        getDBPizzaData,
        getDBPizzaDataAllSelected,
        getSelectedPizzaAmount,
        getSubtotalForPizza,
      }}
    >
      {!isEmpty(pizzaDataLUT) && children}
    </PizzaContext.Provider>
  );
};

export default PizzaContext;
export { PizzaContextProvider };
