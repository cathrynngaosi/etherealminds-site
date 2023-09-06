import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProducts } from "../services/apiShop";
import { formatCurrency, getCustomColorCss } from "../utils/helpers";
import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";
import ColorBlock from "../features/product/ColorBlock";
import FontOptions from "../features/product/FontOptions";
import SideImageThumbnail from "../features/product/SideImageThumbnail";
import DecalColorOptions from "../features/product/DecalColorOptions";
import ProductSpecs from "../features/product/ProductSpecs";
import { addToCart } from "../features/cart/cartSlice";
import AddItemNotif from "../features/cart/AddItemNotif";

function ProductView() {
  const dispatch = useDispatch();

  const productDetails = useLoaderData();
  const { name, price, images, colors, description } = productDetails[0];

  const [customStyle, setCustomStyle] = useState(
    "focus:outline-none text-xl border font-anton rounded px-4 py-4 md:w-[80%] w-full border-seashellNude cursor-default",
  );
  const [showRequired, setShowRequired] = useState("hidden");
  const [customText, setCustomText] = useState("");
  const [customFontCss, setCustomFontCss] = useState("font-anton");
  const [customFontDisplay, setCustomFontDisplay] = useState("Anton");
  const [customColorCss, setCustomColorCss] = useState("black");
  const [customColorDisplay, setCustomColorDisplay] = useState("Black");

  const [productColor, setProductColor] = useState(colors[0]);
  const [displayPhoto, setDisplayPhoto] = useState(images[0]);

  const [showCartNotif, setShowCartNotif] = useState(false);

  const newItem = {
    name,
    price,
    qty: 1,
    thumbnail: images[0],
    productColor,
    customText,
    customColorDisplay,
    customFontDisplay,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    function generatePreview() {
      const initialStyle =
        "focus:outline-none text-2xl border rounded px-4 py-4 md:w-[80%] w-full border-seashellNude cursor-default";
      setCustomStyle(`${initialStyle} ${customFontCss} ${customColorCss}`);
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

  function handleAddToCart() {
    if (customText !== "") {
      setShowRequired("hidden");

      dispatch(addToCart(newItem));
      setShowCartNotif((show) => !show);
    } else {
      setShowRequired("block");
    }
  }

  return (
    <section>
      <AddItemNotif
        item={newItem}
        shown={showCartNotif}
        close={() => {
          setShowCartNotif(false);
        }}
      />
      <div className="flex flex-col space-y-4 px-10 py-10 md:flex-row md:space-x-4 md:space-y-0 md:px-14">
        <div className="flex flex-col-reverse md:w-2/4 md:flex-row md:space-x-4">
          <div className="mt-4 flex space-x-1.5 md:mt-0 md:flex-col md:space-x-0 md:space-y-2">
            {images.map((img) => (
              <SideImageThumbnail
                img={img}
                key={img}
                display={displayPhoto}
                handleClick={() => handleClickSidePhoto(img)}
              />
            ))}
          </div>
          <div className="">
            <img src={displayPhoto} alt="" className="w-full md:h-[35rem]" />
          </div>
        </div>

        <div className="mx-0 space-y-3 md:mt-0 md:w-2/4">
          <div className="space-y-1 border-b border-lightBrown pb-3">
            <h1 className="text-3xl uppercase text-darkBrown">{name}</h1>
            <p className="font-price text-2xl tracking-wider">
              {formatCurrency(price)}
            </p>
          </div>

          {colors.length > 0 && (
            <div className="space-y-1">
              <div className="flex items-center space-x-1 text-darkBrown">
                <h2 className="text-lg font-semibold uppercase ">
                  Product Color:
                </h2>
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

          <div className="space-y-1">
            <h2 className="text-lg font-semibold uppercase text-darkBrown">
              Custom Text:
            </h2>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className="w-full rounded border border-lightBrown px-2 py-1 focus:outline-none md:w-[80%]"
            />
            <span className={`mt-2 text-sm text-mediumBrown ${showRequired}`}>
              Required!
            </span>
          </div>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0">
            <FontOptions
              customFontDisplay={customFontDisplay}
              customFontCss={customFontCss}
              handleClickCustomFont={handleClickCustomFont}
            />

            <DecalColorOptions
              customColorDisplay={customColorDisplay}
              handleClickCustomColor={handleClickCustomColor}
            />
          </div>

          <div>
            <h2 className="text-lg font-semibold uppercase text-darkBrown">
              Preview:
            </h2>
            <div className={customStyle}>{customText}</div>
          </div>

          <div className="my-10 flex space-x-2 border-b border-lightBrown pb-5">
            <button
              className="w-[90%] rounded-md bg-mediumBrown px-10 py-2 tracking-widest text-white duration-150 md:w-[70%]"
              onClick={handleAddToCart}
            >
              add to cart
            </button>
            <button className="rounded-md bg-mediumBrown px-5 py-2 tracking-widest text-white duration-150">
              <FiHeart />
            </button>
          </div>

          <ProductSpecs description={description} />
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
