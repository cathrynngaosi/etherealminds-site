function FontOptions({
  customFontDisplay,
  customFontCss,
  handleClickCustomFont,
}) {
  return (
    <div className="space-y-1 w-1/2">
      <div className="flex items-center space-x-1 text-darkBrown">
        <h2 className="uppercase text-lg font-semibold ">Font:</h2>
        <span className="font-medium capitalize">{customFontDisplay}</span>
      </div>

      <div className="space-x-1 flex">
        <div
          className={
            customFontCss === "font-anton"
              ? "text-md font-anton font-box-selected"
              : "text-md font-anton font-box"
          }
          onClick={() => handleClickCustomFont("font-anton")}
        >
          <span>Anton</span>
        </div>
        <div
          className={
            customFontCss === "font-cookie"
              ? "text-xl font-cookie font-box-selected"
              : "text-xl font-cookie font-box"
          }
          onClick={() => handleClickCustomFont("font-cookie")}
        >
          <span> Cookie</span>
        </div>
        <div
          className={
            customFontCss === "font-tenali"
              ? "text-xl font-tenali font-box-selected"
              : "text-xl font-tenali font-box"
          }
          onClick={() => handleClickCustomFont("font-tenali")}
        >
          <span className="mt-[5px]"> Tenali</span>
        </div>
        <div
          className={
            customFontCss === "font-pacifico"
              ? "text-sm font-pacifico font-box-selected"
              : "text-sm font-pacifico font-box"
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
