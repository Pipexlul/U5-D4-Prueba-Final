import { createContext } from "react";

const PizzaContext = createContext(null);

const PizzaContextProvider = ({ children }) => {
  return <PizzaContext.Provider value={{}}>{children}</PizzaContext.Provider>;
};

export default PizzaContextProvider;
export { PizzaContext };
