import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";

import { navData } from "../data/navData.json";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <NavBar
        header="Mamma Mia Pizzeria "
        headerExtra="🍕 👩‍🍳"
        headerGradient="bg-gradient-to-r from-red-600 via-white to-green-500"
        bgLinkColor="bg-green-500"
        textLinkColor="text-white"
        navLinks={navData}
      />
      <Outlet />
    </div>
  );
};

export default Root;
