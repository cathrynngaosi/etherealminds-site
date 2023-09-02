function Button({ children }) {
  return (
    <button className="text-white bg-mediumBrown px-10 py-2 rounded-md tracking-widest hover:scale-105 duration-150 ">
      {children}
    </button>
  );
}

export default Button;
