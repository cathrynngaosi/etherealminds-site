function Input({ children, type, placeholder, cols }) {
  return (
    <label
      className={`relative block focus-within:text-darkBrown ${
        cols === "2" && "w-full"
      }`}
    >
      {children}
      <input
        type={type}
        placeholder={placeholder}
        className="form-input block w-full appearance-none rounded-md border border-lightBrown p-3 pl-10 text-darkBrown placeholder-mediumBrown focus:outline-lightBrown"
      />
    </label>
  );
}

export default Input;
