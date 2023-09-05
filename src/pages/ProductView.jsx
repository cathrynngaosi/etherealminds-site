import { useLoaderData } from "react-router-dom";
import { getProducts } from "../services/apiShop";
import { formatCurrency, getCustomColorCss } from "../utils/helpers";
import ColorBlock from "../features/products/ColorBlock";
import { FiHeart } from "react-icons/fi";
import { useEffect, useState } from "react";
import SideImageThumbnail from "../features/products/SideImageThumbnail";

function ProductView() {
  const productDetails = useLoaderData();
  const { name, price, images, colors, description } = productDetails[0];

  const [customStyle, setCustomStyle] = useState(
    "focus:outline-none text-xl border font-anton rounded px-4 py-4 md:w-[80%] w-full border-seashellNude cursor-default"
  );
  const [customText, setCustomText] = useState("");
  const [customFontCss, setCustomFontCss] = useState("font-anton");
  const [customFontDisplay, setCustomFontDisplay] = useState("Anton");
  const [customColorCss, setCustomColorCss] = useState("black");
  const [customColorDisplay, setCustomColorDisplay] = useState("Black");

  const [productColor, setProductColor] = useState(colors[0]);
  const [displayPhoto, setDisplayPhoto] = useState(images[0]);

  useEffect(() => {
    async function generatePreview() {
      const initialStyle =
        "focus:outline-none text-2xl border rounded px-4 py-4 md:w-[80%] w-full border-seashellNude cursor-default";
      setCustomStyle(`${initialStyle} ${customFontCss}  ${customColorCss}`);
    }

    generatePreview();
  }, [customFontCss, customColorCss]);

  function handleClickProdColor(color) {
    setProductColor(color);
  }

  function handleClickCustomColor(color) {
    setCustomColorCss(getCustomColorCss(color));
    setCustomColorDisplay(color);
  }

  function handleClickCustomFont(font) {
    setCustomFontCss(font);
    setCustomFontDisplay(font.replace("font-", ""));
  }

  function handleClickSidePhoto(img) {
    setDisplayPhoto(img);
  }

  return (
    <section className="flex py-10 md:px-14 px-10 space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row">
      <div className="md:w-2/4 flex md:space-x-4 flex-col-reverse md:flex-row">
        <div className="md:space-y-2 space-x-1.5 md:space-x-0 flex md:flex-col mt-4 md:mt-0">
          {images.map((img) => (
            <SideImageThumbnail
              img={img}
              key={img}
              handleClick={() => handleClickSidePhoto(img)}
            />
          ))}
        </div>
        <div className="">
          <img src={displayPhoto} alt="" className="md:h-[35rem] w-full" />
        </div>
      </div>

      <div className="md:w-2/4 mx-0 space-y-3 md:mt-0">
        <div className="border-b border-lightBrown pb-3 space-y-1">
          <h1 className="uppercase text-3xl text-darkBrown">{name}</h1>
          <p className="font-price text-2xl tracking-wider">
            {formatCurrency(price)}
          </p>
        </div>

        {colors.length > 0 && (
          <div className="space-y-1">
            <div className="flex items-center space-x-1 text-darkBrown">
              <h2 className="uppercase text-lg font-semibold ">
                Product Color:{" "}
              </h2>
              <span className="font-medium">{productColor}</span>
            </div>
            <div className="flex space-x-1">
              {colors.map((color) => (
                <ColorBlock
                  color={color}
                  key={color}
                  handleClick={() => handleClickProdColor(color)}
                />
              ))}
            </div>
          </div>
        )}

        <div className="space-y-1">
          <h2 className="uppercase text-lg font-semibold text-darkBrown">
            Custom Text:
          </h2>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="border border-lightBrown w-full md:w-[80%] focus:outline-none py-1 rounded px-2"
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="space-y-1 w-1/2">
            <div className="flex items-center space-x-1 text-darkBrown">
              <h2 className="uppercase text-lg font-semibold ">Font:</h2>
              <span className="font-medium capitalize">
                {customFontDisplay}
              </span>
            </div>

            <div className="space-x-1 flex">
              <div
                className="px-4 py-[1px] text-md items-center flex border cursor-pointer font-anton"
                onClick={() => handleClickCustomFont("font-anton")}
              >
                <span>Anton</span>
              </div>
              <div
                className="px-4 py-[1px] text-xl items-center flex border cursor-pointer font-cookie"
                onClick={() => handleClickCustomFont("font-cookie")}
              >
                <span> Cookie</span>
              </div>
              <div
                className="px-4 py-[1px] text-xl items-center flex border cursor-pointer font-tenali"
                onClick={() => handleClickCustomFont("font-tenali")}
              >
                <span className="mt-[5px]"> Tenali</span>
              </div>
              <div
                className="px-4 py-[1px] text-sm items-center flex border cursor-pointer font-pacifico"
                onClick={() => handleClickCustomFont("font-pacifico")}
              >
                <span> Pacifico</span>
              </div>
            </div>
          </div>

          <div className="space-y-1 w-1/2">
            <div className="flex items-center space-x-1 text-darkBrown">
              <h2 className="uppercase text-lg font-semibold ">Decal Color:</h2>
              <span className="font-medium">{customColorDisplay}</span>
            </div>

            <div className="flex space-x-1">
              <div
                className="h-9 w-9 bg-black border border-slate-10 cursor-pointer"
                onClick={() => handleClickCustomColor("Black")}
              ></div>
              <div
                className="h-9 w-9 bg-white border border-slate-10	cursor-pointer"
                onClick={() => handleClickCustomColor("White")}
              ></div>
              <div
                className="h-9 w-9 bg-gold border border-slate-10	cursor-pointer"
                onClick={() => handleClickCustomColor("Gold")}
              ></div>
              <div
                className="h-9 w-9 bg-rosegold border border-slate-10	cursor-pointer"
                onClick={() => handleClickCustomColor("Rosegold")}
              ></div>
              <div
                className="h-9 w-9 bg-gradient-to-b from-cyan-400 to-rose-400 border border-slate-10	cursor-pointer"
                onClick={() => handleClickCustomColor("Holo")}
              ></div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="uppercase text-lg font-semibold text-darkBrown">
            Preview:
          </h2>
          <div className={customStyle}>{customText}</div>
        </div>

        <div className="flex space-x-2 mt-10">
          <button className="text-white bg-mediumBrown px-10 py-2 rounded-md tracking-widest duration-150 md:w-[70%] w-[90%] ">
            add to cart
          </button>
          <button className="text-white bg-mediumBrown px-5 py-2 rounded-md tracking-widest duration-150">
            <FiHeart />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductView;

export async function loader({ params }) {
  const productDetails = await getProducts(params.product);
  return productDetails;
}
