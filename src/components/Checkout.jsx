import { useContext } from "react";

import CheckoutItem from "./CheckoutItem";

import PizzaContext from "../contexts/PizzaContext";

import { formatNumToCLP } from "../utils/currencyUtils";
import { injectStyle } from "../utils/stringUtils";

const disabledStyleInjector = injectStyle(
  "cursor-not-allowed bg-gray-700 border-gray-600 placeholder:text-gray-400 focus:ring-0 focus:border-0"
);

const Checkout = ({ store, bgStoreColors }) => {
  const { totalToPay, getDBPizzaDataAllSelected } = useContext(PizzaContext);

  const pizzasToDisplay = getDBPizzaDataAllSelected();

  return (
    <section>
      <div className="mx-auto grid grid-cols-1 2xl:grid-cols-2">
        <div className="bg-gray-600 py-12 md:py-24">
          <div className="flex flex-col place-items-center space-y-8">
            <div className="flex items-center gap-4">
              <span
                className={`h-10 w-10 rounded-full ${bgStoreColors}`}
              ></span>

              <h2 className="font-medium text-white text-2xl">{store}</h2>
            </div>

            <div className="w-max mx-auto">
              {pizzasToDisplay.length === 0 ? (
                <p className="text-center text-2xl font-medium text-white">
                  Todavia no tienes ninguna pizza añadida
                </p>
              ) : (
                <ul className="-my-4 divide-y divide-gray-100">
                  {pizzasToDisplay.map((pizza) => {
                    return (
                      <CheckoutItem
                        key={pizza.id}
                        id={pizza.id}
                        name={pizza.name}
                        ingredients={pizza.ingredients}
                        img={pizza.img}
                        price={pizza.price}
                      />
                    );
                  })}
                </ul>
              )}
            </div>

            <div>
              <p className="mt-1 text-sm text-white md:text-xl">
                Total a pagar:
              </p>
              <p className="text-2xl font-medium tracking-tight text-white">
                {formatNumToCLP(totalToPay)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 py-12 md:py-24 text-white">
          <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <label for="FirstName" className="block text-xs font-medium">
                  Nombre
                </label>

                <input
                  type="text"
                  id="FirstName"
                  disabled
                  className={disabledStyleInjector(
                    "mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  )}
                />
              </div>

              <div className="col-span-3">
                <label for="LastName" className="block text-xs font-medium">
                  Apellido
                </label>

                <input
                  type="text"
                  id="LastName"
                  disabled
                  className={disabledStyleInjector(
                    "mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  )}
                />
              </div>

              <div className="col-span-6">
                <label for="Email" className="block text-xs font-medium">
                  Correo
                </label>

                <input
                  type="email"
                  id="Email"
                  disabled
                  className={disabledStyleInjector(
                    "mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  )}
                />
              </div>

              <div className="col-span-6">
                <label for="Phone" className="block text-xs font-medium">
                  Número de contacto
                </label>

                <input
                  type="tel"
                  id="Phone"
                  disabled
                  className={disabledStyleInjector(
                    "mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  )}
                />
              </div>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium">
                  Tarjeta de crédito
                </legend>

                <div className="mt-1 -space-y-px rounded-md bg-transparent shadow-sm">
                  <div>
                    <input
                      type="text"
                      placeholder="Número de tarjeta"
                      disabled
                      className={disabledStyleInjector(
                        "relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                      )}
                    />
                  </div>

                  <div className="flex -space-x-px">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Fecha de Expiracion"
                        disabled
                        className={disabledStyleInjector(
                          "relative w-full rounded-bl-md border-gray-200 focus:z-10 sm:text-sm"
                        )}
                      />
                    </div>

                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="CVC"
                        disabled
                        className={disabledStyleInjector(
                          "relative w-full rounded-br-md border-gray-200 focus:z-10 sm:text-sm"
                        )}
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium">
                  Dirección de facturación
                </legend>

                <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                  <div>
                    <select
                      id="Country"
                      disabled
                      className={disabledStyleInjector(
                        "relative w-full rounded-t-md border-gray-200 sm:text-sm"
                      )}
                    >
                      <option>Chile</option>
                      <option>Argentina</option>
                      <option>Brasil</option>
                      <option>Colombia</option>
                      <option>Perú</option>
                    </select>
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Código Postal"
                      disabled
                      className={disabledStyleInjector(
                        "relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                      )}
                    />
                  </div>
                </div>
              </fieldset>

              <div className="col-span-6">
                <button
                  className={disabledStyleInjector(
                    "block w-full rounded-md bg-black p-2.5 text-sm text-gray-400/80 transition hover:shadow-lg"
                  )}
                >
                  Pagar
                </button>
              </div>
            </form>

            <p className="mt-4 text-orange-400">
              Lo lamentamos, actualmente presentamos problemas en la base de
              datos, intente más tarde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
