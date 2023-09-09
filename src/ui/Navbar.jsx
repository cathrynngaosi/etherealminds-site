import { Link, NavLink } from "react-router-dom";
import { FiHeart, FiUser } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";

function Navbar() {
  const cartQty = useSelector(getTotalCartQuantity);

  return (
    <nav className="relative z-50 flex items-center justify-between bg-seashellPink px-6 py-3">
      <div className="space-x-3 text-lg">
        <NavLink to="/"> home </NavLink>
        <NavLink to="/shop"> shop </NavLink>
        <NavLink to="/faqs"> faqs </NavLink>
      </div>
      <div>
        <Link to="/">
          <img src="../../public/EMLogo.svg" alt="" className="h-14" />
        </Link>
      </div>
      <div className="flex space-x-3">
        <Link to="/login">
          <FiUser className="nav-icon" />
        </Link>

        <Link to="/favorites">
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
  );
}

export default Navbar;
