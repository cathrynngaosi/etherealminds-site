import { getColorBlockCss } from "../../utils/helpers";

function ColorBlock({ color, handleClick, selectedColor }) {
  const bgColor = getColorBlockCss(color);

  const blockStyle = `${bgColor} ${
    selectedColor === color ? "color-block-selected" : "color-block"
  }`;
  return <div className={blockStyle} onClick={() => handleClick(color)}></div>;
}

export default ColorBlock;
