import { Link } from "react-router-dom";
import { formatLink } from "../../utils/helpers";

function CollectionsCard({ collection }) {
  const { name, cover } = collection;

  return (
    <Link to={formatLink(name)}>
      <div className="cursor-pointer">
        <img src={cover} alt="" className="md:h-80" />
        <div className="py-2">
          <h2>{name}</h2>
        </div>
      </div>
    </Link>
  );
}

export default CollectionsCard;
