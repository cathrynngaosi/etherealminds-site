import { getColorBlock } from "../../utils/helpers";

function ColorBlock({ color }) {
  const bgColor = getColorBlock(color);

  const blockStyle = `h-9 w-9 ${bgColor} border border-slate-10	cursor-pointer`;
  return <div className={blockStyle}></div>;
}

export default ColorBlock;
