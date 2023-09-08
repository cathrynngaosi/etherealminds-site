import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../services/apiShop";
import { generateUniqueItemID } from "../utils/helpers";
import { getCustomStyles } from "../features/product/customTextSlice";
import { addToCart, getShowCartNotif } from "../features/cart/cartSlice";

import Button from "../ui/Button";
import Preview from "../features/product/Preview";
import CustomText from "../features/product/CustomText";
import AddItemNotif from "../features/cart/AddItemNotif";
import FavoriteBtn from "../features/product/FavoriteBtn";
import FontOptions from "../features/product/FontOptions";
import ProductSpecs from "../features/product/ProductSpecs";
import ProductHeader from "../features/product/ProductHeader";
import ProductColors from "../features/product/ProductColors";
import ProductImages from "../features/product/ProductImages";
import DecalColorOptions from "../features/product/DecalColorOptions";

function ProductView() {
  const dispatch = useDispatch();
  const itemID = generateUniqueItemID();
  const productDetails = useLoaderData();
  const showCartNotif = useSelector(getShowCartNotif);

  const { id, name, price, images, colors, description } = productDetails[0];
  const { customText, customFontDisplay, customColorDisplay } =
    useSelector(getCustomStyles);
  const [productColor, setProductColor] = useState(colors[0]);

  const newItem = {
    id: itemID,
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

  return (
    <section>
      <AddItemNotif item={newItem} shown={showCartNotif} />
      <div className="flex flex-col space-y-4 px-10 py-10 md:flex-row md:space-x-4 md:space-y-0 md:px-14">
        <ProductImages images={images} />

        <div className="mx-0 space-y-3 md:mt-0 md:w-2/4">
          <ProductHeader name={name} price={price} />
          <ProductColors
            colors={colors}
            productColor={productColor}
            setProductColor={setProductColor}
          />

          <CustomText />

          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0">
            <FontOptions />
            <DecalColorOptions />
          </div>

          <Preview />

          <div className="my-10 flex space-x-2 border-b border-lightBrown pb-5">
            <Button type="cart" onClick={() => dispatch(addToCart(newItem))}>
              add to cart
            </Button>
            <FavoriteBtn id={id} />
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
