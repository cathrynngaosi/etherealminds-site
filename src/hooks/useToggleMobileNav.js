import { useEffect, useRef, useState } from "react";

function useToggleMobileNav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    async function showNavbar() {
      const open =
        "m-h-screen opacity-[95%] md:hidden fixed inset-0 z-20 h-full w-full flex-col items-center divide-y divide-lightBrown bg-seashellPink px-6 py-1 pb-4 pt-24 lowercase tracking-widest transition-all ease-linear duration-300";
      const close =
        "m-h-screen opacity-0 md:hidden absolute inset-0 z-20 h-full w-full flex-col items-center divide-y divide-lightBrown bg-seashellPink px-6 py-1 pb-4 pt-24 lowercase tracking-widest transition-all ease-linear duration-300";

      if (menuIsOpen) {
        document.getElementById("mobile-menu").className = open;
      } else {
        document.getElementById("mobile-menu").className = close;
      }
    }

    console.log(menuIsOpen);
    showNavbar();
  }, [menuIsOpen]);

  return { menuIsOpen, setMenuIsOpen };
}

export default useToggleMobileNav;
