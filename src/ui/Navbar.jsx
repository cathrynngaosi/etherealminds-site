import { Link, NavLink } from "react-router-dom";
import { FiHeart, FiUser } from "react-icons/fi";
import { CgShoppingCart } from "react-icons/cg";

function Navbar() {
  return (
    <nav className="relative z-50 flex items-center justify-between bg-seashellPink px-6 py-3">
      <div className="space-x-3 text-lg">
        <NavLink to="/"> home </NavLink>
        <NavLink to="/shop"> shop </NavLink>
        <NavLink to="/faqs"> faqs </NavLink>
      </div>
      <div>
        <img src="../../public/EMLogo.svg" alt="" className="h-14" />
      </div>
      <div className="flex space-x-3">
        <Link to="/login">
          <FiUser className="nav-icon" />
        </Link>

        <Link to="/favorites">
          <FiHeart className="nav-icon" />
        </Link>

        <Link to="/cart">
          <CgShoppingCart className="nav-icon" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
