import { useDispatch, useSelector } from "react-redux";
import { getCustomStyles, updateCustomColor } from "./customTextSlice";

function DecalColorOptions() {
  const dispatch = useDispatch();
  const { customColorDisplay } = useSelector(getCustomStyles);

  return (
    <div className="w-1/2 space-y-1">
      <div className="flex items-center space-x-1 text-darkBrown">
        <h2 className="text-lg font-semibold uppercase ">Decal Color:</h2>
        <span className="font-medium">{customColorDisplay}</span>
      </div>

      <div className="flex space-x-1">
        <div
          className={
            customColorDisplay === "Black"
              ? "color-block-selected bg-black"
              : "color-block bg-black"
          }
          onClick={() => dispatch(updateCustomColor("Black"))}
        ></div>
        <div
          className={
            customColorDisplay === "White"
              ? "color-block-selected bg-white"
              : "color-block bg-white"
          }
          onClick={() => dispatch(updateCustomColor("White"))}
        ></div>
        <div
          className={
            customColorDisplay === "Gold"
              ? "color-block-selected bg-gold"
              : "color-block bg-gold"
          }
          onClick={() => dispatch(updateCustomColor("Gold"))}
        ></div>
        <div
          className={
            customColorDisplay === "Rosegold"
              ? "color-block-selected bg-rosegold"
              : "color-block bg-rosegold"
          }
          onClick={() => dispatch(updateCustomColor("Rosegold"))}
        ></div>
        <div
          className={
            customColorDisplay === "Holo"
              ? "color-block-selected bg-gradient-to-b from-cyan-400 to-rose-400"
              : "color-block bg-gradient-to-b from-cyan-400 to-rose-400"
          }
          onClick={() => dispatch(updateCustomColor("Holo"))}
        ></div>
      </div>
    </div>
  );
}

export default DecalColorOptions;
