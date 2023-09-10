import { useState } from "react";

function HamburgerBtn({ menuIsOpen, onClick }) {
  return (
    <button
      className={`${
        menuIsOpen ? "open" : "hamburger"
      } z-30 block focus:outline-none md:hidden`}
      onClick={onClick}
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
}

export default HamburgerBtn;
