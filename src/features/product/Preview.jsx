import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCustomStyles } from "./customTextSlice";

function Preview() {
  const { customText, customFontCss, customColorCss } =
    useSelector(getCustomStyles);
  const [customStyle, setCustomStyle] = useState(
    "focus:outline-none text-xl border font-anton rounded px-4 py-4 md:w-[80%] w-full border-seashellNude cursor-default",
  );

  useEffect(() => {
    function generatePreview() {
      const initialStyle =
        "focus:outline-none text-2xl border rounded px-4 py-4 md:w-[80%] w-full border-seashellNude cursor-default";
      setCustomStyle(`${initialStyle} ${customFontCss} ${customColorCss}`);
    }

    generatePreview();
  }, [customFontCss, customColorCss]);

  return (
    <div>
      <h2 className="text-lg font-semibold uppercase text-darkBrown">
        Preview:
      </h2>
      <div className={customStyle}>{customText}</div>
    </div>
  );
}

export default Preview;
