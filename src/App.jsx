import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";

import { Root, Home, DetailedPizza, Cart } from "./views";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: null,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/pizza/:pizzaId",
        element: <DetailedPizza />,
      },
      {
        path: "/carrito",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
