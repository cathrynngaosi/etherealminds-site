import { Link } from "react-router-dom";

function MobileMenu({ menuIsOpen, setMenuIsOpen }) {
  return (
    <div
      id="mobile-menu"
      className={`m-h-screen ${
        menuIsOpen ? "fixed" : "hidden"
      } inset-0 z-20 h-full w-full flex-col items-center divide-y divide-lightBrown bg-seashellPink px-6 py-1 pb-4 pt-24 lowercase tracking-widest opacity-[95%]`}
    >
      <div
        className="w-full py-3 text-center hover:text-darkBrown"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <Link to="/">Home</Link>
      </div>
      <div
        className="w-full py-3 text-center hover:text-darkBrown"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <Link to="/shop">Shop</Link>
      </div>
      <div
        className="w-full py-3 text-center hover:text-darkBrown"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <Link to="/faqs">Faqs</Link>
      </div>
      <div
        className="w-full py-3 text-center hover:text-darkBrown"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <Link to="/login">Account</Link>
      </div>
      <div
        className="w-full py-3 text-center hover:text-darkBrown"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <Link to="/favorites">Favorites</Link>
      </div>
    </div>
  );
}

export default MobileMenu;
