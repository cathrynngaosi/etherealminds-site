import { useState } from "react";
import { useSelector } from "react-redux";
import { CgShoppingCart } from "react-icons/cg";
import { FiHeart, FiUser } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

import HamburgerBtn from "./HamburgerBtn";
import MobileMenu from "./MobileMenu";
import useToggleMobileNav from "../hooks/useToggleMobileNav";
import { getImage } from "../utils/helpers";

function Navbar() {
  const cartQty = useSelector(getTotalCartQuantity);
  const { menuIsOpen, setMenuIsOpen } = useToggleMobileNav();

  return (
    <>
      <nav className="relative z-50 flex items-center justify-between bg-seashellPink px-6 py-3">
        <div className="hidden space-x-3 text-lg md:flex">
          <NavLink to="/"> home </NavLink>
          <NavLink to="/shop"> shop </NavLink>
          <NavLink to="/faqs"> faqs </NavLink>
        </div>
        <HamburgerBtn
          menuIsOpen={menuIsOpen}
          onClick={() => setMenuIsOpen((isOpen) => !isOpen)}
        />

        <div>
          <Link to="/">
            <img src={getImage("/public/EMLogo.svg")} alt="" className="h-14" />
          </Link>
        </div>
        <div className="flex space-x-3">
          <Link className="hidden md:block" to="/login">
            <FiUser className="nav-icon" />
          </Link>

          <Link className="hidden md:block" to="/favorites">
            <FiHeart className="nav-icon" />
          </Link>

          <Link to="/cart" className="flex">
            <CgShoppingCart className="nav-icon" />
            {cartQty > 0 && (
              <span className="absolute right-[18px] top-[24px] flex h-[10px] w-[10px] items-center justify-center rounded-full bg-seashellPink p-[8px] text-xs">
                {cartQty}
              </span>
            )}
          </Link>
        </div>
      </nav>

      <MobileMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </>
  );
}

export default Navbar;
