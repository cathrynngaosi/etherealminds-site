import { Link } from "react-router-dom";
import { formatLink } from "../utils/helpers";

function CollectionsMiniPreview({ name, img }) {
  return (
    <Link to={"shop/" + formatLink(name)}>
      <div className="space-y-4 hover:scale-105 hover:cursor-pointer">
        <img src={img} alt="" className="h-32 rounded-full md:h-40" />
        <h2 className="text-center tracking-wider text-darkBrown">{name}</h2>
      </div>
    </Link>
  );
}

export default CollectionsMiniPreview;
