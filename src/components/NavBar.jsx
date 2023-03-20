import { Link, NavLink } from "react-router-dom";

import ShinyNavLink from "./ShinyNavLink";
import CartButton from "./CartButton";

const NavBar = ({
  header,
  headerExtra,
  headerGradient,
  navLinks,
  bgLinkColor,
  textLinkColor,
}) => {
  return (
    <header className="bg-gray-900">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <h1>
          <Link className="text-2xl font-extrabold" to="/home">
            <span className={`bg-clip-text text-transparent ${headerGradient}`}>
              {header}
            </span>
            {headerExtra && (
              <span className="bg-clip-border text-white text-2xl font-extrabold">
                {headerExtra}
              </span>
            )}
          </Link>
        </h1>

        <div className="flex flex-1 items-center justify-between">
          <nav>
            <ul className="flex items-center gap-6 text-sm">
              {navLinks.map(({ label, path }, idx) => {
                return (
                  <li key={idx}>
                    <NavLink to={path}>
                      {({ isActive }) => {
                        return (
                          <ShinyNavLink
                            label={label}
                            bgColor={bgLinkColor}
                            labelColor={textLinkColor}
                            isActive={isActive}
                          />
                        );
                      }}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <CartButton
            label="🛒 Carrito: "
            bgColor="bg-green-500 hover:bg-green-300"
            bgColorEmpty="bg-red-500 hover:bg-red-300"
            textColor="text-black"
            cartPath="/carrito"
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
