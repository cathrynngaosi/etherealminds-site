function DecalColorOptions({ customColorDisplay, handleClickCustomColor }) {
  return (
    <div className="space-y-1 w-1/2">
      <div className="flex items-center space-x-1 text-darkBrown">
        <h2 className="uppercase text-lg font-semibold ">Decal Color:</h2>
        <span className="font-medium">{customColorDisplay}</span>
      </div>

      <div className="flex space-x-1">
        <div
          className={
            customColorDisplay === "Black"
              ? "bg-black color-block-selected"
              : "bg-black color-block"
          }
          onClick={() => handleClickCustomColor("Black")}
        ></div>
        <div
          className={
            customColorDisplay === "White"
              ? "bg-white color-block-selected"
              : "bg-white color-block"
          }
          onClick={() => handleClickCustomColor("White")}
        ></div>
        <div
          className={
            customColorDisplay === "Gold"
              ? "bg-gold color-block-selected"
              : "bg-gold color-block"
          }
          onClick={() => handleClickCustomColor("Gold")}
        ></div>
        <div
          className={
            customColorDisplay === "Rosegold"
              ? "bg-rosegold color-block-selected"
              : "bg-rosegold color-block"
          }
          onClick={() => handleClickCustomColor("Rosegold")}
        ></div>
        <div
          className={
            customColorDisplay === "Holo"
              ? "bg-gradient-to-b from-cyan-400 to-rose-400 color-block-selected"
              : "bg-gradient-to-b from-cyan-400 to-rose-400 color-block"
          }
          onClick={() => handleClickCustomColor("Holo")}
        ></div>
      </div>
    </div>
  );
}

export default DecalColorOptions;
