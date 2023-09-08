import { Link } from "react-router-dom";

function Button({ children, type, onClick, to }) {
  const base =
    "rounded-md bg-mediumBrown px-10 py-2 tracking-widest text-white ";

  const styles = {
    full: base + "w-full",
    90: base + "w-[90%] md:w-[70%]",
    fave: "rounded-md bg-mediumBrown px-5 py-2 tracking-widest text-white",
    join: "bg-mediumBrown text-white px-6 py-1.5 text-sm rounded absolute right-2 top-[20px] font-medium",
  };

  if (onClick) {
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to}>
        <button className={type ? styles[type] : base}>{children}</button>
      </Link>
    );
  }

  if (type) {
    return <button className={styles[type]}>{children}</button>;
  }

  return <button className={base}>{children}</button>;
}

export default Button;
