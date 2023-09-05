import { useLoaderData } from "react-router-dom";
import { getProducts } from "../services/apiShop";
import ImagePreview from "../features/shop/ImagePreview";
import { formatCurrency } from "../utils/helpers";
import ColorBlock from "../features/shop/ColorBlock";
import { FiHeart } from "react-icons/fi";
import { useEffect, useState } from "react";

function ProductView() {
  const productDetails = useLoaderData();
  const { name, price, images, colors, description } = productDetails[0];

  return (
    <section className="flex py-10 md:px-14 px-10 space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row">
      <div className="md:w-2/4 flex md:space-x-4 flex-col-reverse md:flex-row">
        <div className="md:space-y-2 space-x-1.5 md:space-x-0 flex md:flex-col mt-4 md:mt-0">
          {images.map((img) => (
            <ImagePreview img={img} key={img} />
          ))}
        </div>
        <div className="">
          <img src={images[0]} alt="" className="md:h-[35rem] w-full" />
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
            <h2 className="uppercase text-lg font-semibold text-darkBrown">
              Product Color:
            </h2>
            <div className="flex space-x-1">
              {colors.map((color) => (
                <ColorBlock color={color} key={color} />
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
            className="border border-lightBrown w-full md:w-[80%] focus:outline-none py-1 rounded px-2"
          />
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="space-y-1 w-1/2">
            <h2 className="uppercase text-lg font-semibold text-darkBrown">
              Font:
            </h2>
            <div className="space-x-1 flex">
              <div className="px-4 py-[1px] text-md items-center flex border cursor-pointer font-anton">
                <span>Anton</span>
              </div>
              <div className="px-4 py-[1px] text-xl items-center flex border cursor-pointer font-cookie">
                <span> Cookie</span>
              </div>
              <div className="px-4 py-[1px] text-xl items-center flex border cursor-pointer font-tenali">
                <span className="mt-[5px]"> Tenali</span>
              </div>
              <div className="px-4 py-[1px] text-sm items-center flex border cursor-pointer font-pacifico">
                <span> Pacifico</span>
              </div>
            </div>
          </div>

          <div className="space-y-1 w-1/2">
            <h2 className="uppercase text-lg font-semibold text-darkBrown">
              Decal Color:
            </h2>
            <div className="flex space-x-1">
              <div className="h-9 w-9 bg-white border border-slate-10	cursor-pointer"></div>
              <div className="h-9 w-9 bg-black border border-slate-10	cursor-pointer"></div>
              <div className="h-9 w-9 bg-gold border border-slate-10	cursor-pointer"></div>
              <div className="h-9 w-9 bg-rosegold border border-slate-10	cursor-pointer"></div>
              <div className="h-9 w-9 bg-gradient-to-b from-cyan-200 to-rose-200 border border-slate-10	cursor-pointer"></div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="uppercase text-lg font-semibold text-darkBrown">
            Preview:
          </h2>
          <div></div>
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
