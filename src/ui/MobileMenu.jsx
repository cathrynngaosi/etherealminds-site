import { useEffect, useRef } from "react";
import { Link, redirect } from "react-router-dom";
import useToggleMobileNav from "../hooks/useToggleMobileNav";

function MobileMenu() {
  return (
    <div
      id="mobile-menu"
      className="m-h-screen absolute inset-0 z-20 h-full w-full flex-col items-center divide-y divide-lightBrown bg-seashellPink px-6 py-1 pb-4 pt-24 lowercase tracking-widest opacity-0 transition-all duration-300 ease-linear md:hidden"
    >
      <div className="w-full py-3 text-center hover:text-darkBrown">
        <Link to="/">Home</Link>
      </div>
      <div className="w-full py-3 text-center hover:text-darkBrown">
        <Link to="/shop">Shop</Link>
      </div>
      <div className="w-full py-3 text-center hover:text-darkBrown">
        <Link to="/faqs">Faqs</Link>
      </div>
      <div className="w-full py-3 text-center hover:text-darkBrown">
        <Link to="/login">Account</Link>
      </div>
      <div className="w-full py-3 text-center hover:text-darkBrown">
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
}

export default MobileMenu;
