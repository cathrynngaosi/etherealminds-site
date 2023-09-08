function Button({ children, type, onClick }) {
  if (type === "cart") {
    return (
      <button
        className="w-[90%] rounded-md bg-mediumBrown px-10 py-2 tracking-widest text-white duration-150 md:w-[70%]"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return (
    <button className="rounded-md bg-mediumBrown px-10 py-2 tracking-widest text-white duration-150 hover:scale-105 ">
      {children}
    </button>
  );
}

export default Button;
