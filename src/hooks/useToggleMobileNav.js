import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

function useToggleMobileNav() {
  const { pathname } = useLocation();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // toggle menu on click of icon
  useEffect(() => {
    async function showNavbar() {
      const open =
        "m-h-screen opacity-[95%] md:hidden fixed inset-0 z-20 h-full w-full flex-col items-center divide-y divide-lightBrown bg-seashellPink px-6 py-1 pb-4 pt-24 lowercase tracking-widest transition-all ease-linear duration-300";
      const close =
        "m-h-screen opacity-0 md:hidden absolute inset-0 h-0 w-0 flex-col items-center divide-y divide-lightBrown bg-seashellPink px-6 py-1 pb-4 pt-24 lowercase tracking-widest transition-all ease-linear duration-300";

      if (menuIsOpen) {
        document.getElementById("mobile-menu").className = open;
      } else {
        document.getElementById("mobile-menu").className = close;
      }
    }

    showNavbar();
  }, [menuIsOpen]);

  // close menu on redirect
  useEffect(() => {
    setMenuIsOpen(false);
  }, [pathname]);

  return { menuIsOpen, setMenuIsOpen };
}

export default useToggleMobileNav;
