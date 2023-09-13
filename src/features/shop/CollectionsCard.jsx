import { Link } from "react-router-dom";
import { formatLink, getImage } from "../../utils/helpers";

function CollectionsCard({ collection }) {
  const { name, cover } = collection;

  return (
    <Link to={formatLink(name)}>
      <div className="cursor-pointer duration-100 hover:scale-105">
        <img src={getImage(cover)} alt="" />
        <div className="py-2">
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  );
}

export default CollectionsCard;
