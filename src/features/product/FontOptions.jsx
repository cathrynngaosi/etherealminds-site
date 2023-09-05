function FontOptions({
  customFontDisplay,
  customFontCss,
  handleClickCustomFont,
}) {
  return (
    <div className="w-1/2 space-y-1">
      <div className="flex items-center space-x-1 text-darkBrown">
        <h2 className="text-lg font-semibold uppercase ">Font:</h2>
        <span className="font-medium capitalize">{customFontDisplay}</span>
      </div>

      <div className="flex space-x-1">
        <div
          className={
            customFontCss === "font-anton"
              ? "text-md font-box-selected font-anton"
              : "text-md font-box font-anton"
          }
          onClick={() => handleClickCustomFont("font-anton")}
        >
          <span>Anton</span>
        </div>
        <div
          className={
            customFontCss === "font-cookie"
              ? "font-box-selected font-cookie text-xl"
              : "font-box font-cookie text-xl"
          }
          onClick={() => handleClickCustomFont("font-cookie")}
        >
          <span> Cookie</span>
        </div>
        <div
          className={
            customFontCss === "font-tenali"
              ? "font-box-selected font-tenali text-xl"
              : "font-box font-tenali text-xl"
          }
          onClick={() => handleClickCustomFont("font-tenali")}
        >
          <span className="mt-[5px]"> Tenali</span>
        </div>
        <div
          className={
            customFontCss === "font-pacifico"
              ? "font-box-selected font-pacifico text-sm"
              : "font-box font-pacifico text-sm"
          }
          onClick={() => handleClickCustomFont("font-pacifico")}
        >
          <span> Pacifico</span>
        </div>
      </div>
    </div>
  );
}

export default FontOptions;
