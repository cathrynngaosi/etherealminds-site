function ViewCustomText({ text, font, color }) {
  return (
    <span
      className={`${font} ${color} bg-seashellNude ${
        font === "font-anton" || font === "font-pacifico"
          ? "text-lg"
          : "text-2xl"
      }`}
    >
      {" "}
      {text}
    </span>
  );
}

export default ViewCustomText;
