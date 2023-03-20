import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";

import { Root, Home, DetailedPizza, Cart, ErrorPage } from "./views";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
