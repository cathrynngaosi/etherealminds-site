import { useState } from "react";
import ColorBlock from "./ColorBlock";

function ProductColors({ colors, productColor, setProductColor }) {
  function handleClickProdColor(color) {
    setProductColor(color);
  }

  return (
    <>
      {colors.length > 0 && (
        <div className="space-y-1">
          <div className="flex items-center space-x-1 text-darkBrown">
            <h2 className="text-lg font-semibold uppercase ">Product Color:</h2>
            <span className="font-medium">{productColor}</span>
          </div>
          <div className="flex space-x-1">
            {colors.map((color) => (
              <ColorBlock
                color={color}
                key={color}
                selectedColor={productColor}
                handleClick={() => handleClickProdColor(color)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ProductColors;
