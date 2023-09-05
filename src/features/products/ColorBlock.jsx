import { getColorBlockCss } from "../../utils/helpers";

function ColorBlock({ color, handleClick }) {
  const bgColor = getColorBlockCss(color);

  const blockStyle = `h-9 w-9 ${bgColor} border border-slate-10	cursor-pointer`;
  return <div className={blockStyle} onClick={() => handleClick(color)}></div>;
}

export default ColorBlock;
