import { useDispatch, useSelector } from "react-redux";
import { getCustomStyles, updateCustomText } from "./customTextSlice";
import { getShowRequired } from "../cart/cartSlice";

function CustomText() {
  const dispatch = useDispatch();
  const { customText } = useSelector(getCustomStyles);
  const showRequired = useSelector(getShowRequired);

  return (
    <div className="space-y-1">
      <h2 className="text-lg font-semibold uppercase text-darkBrown">
        Custom Text:
      </h2>
      <input
        type="text"
        value={customText}
        onChange={(e) => dispatch(updateCustomText(e.target.value))}
        className="w-full rounded border border-lightBrown px-2 py-1 focus:outline-none md:w-[80%]"
      />
      <span className={`mt-2 text-sm text-mediumBrown ${showRequired}`}>
        Required!
      </span>
    </div>
  );
}

export default CustomText;
