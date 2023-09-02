import { Link, NavLink } from "react-router-dom";
import { FiHeart, FiSearch, FiUser } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";

function Navbar() {
  return (
    <nav className="relative z-50 flex bg-seashellPink py-3 items-center justify-between px-6">
      <div className="space-x-3 text-lg">
        <NavLink to="/"> home </NavLink>
        <NavLink to="/shop"> shop </NavLink>
        <NavLink to="/faqs"> faqs </NavLink>
      </div>
      <div>
        <img src="../../public/EMLogo.svg" alt="" className="h-14" />
      </div>
      <div className="flex space-x-3">
        <Link to="/account">
          <FiUser className="nav-icon" />
        </Link>

        <Link to="/favorites">
          <FiHeart className="nav-icon" />
        </Link>

        <Link to="/search">
          <FiSearch className="nav-icon" />
        </Link>

        <Link to="/cart">
          <CgShoppingCart className="nav-icon" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
