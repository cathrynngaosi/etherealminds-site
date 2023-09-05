import { Link } from "react-router-dom";

function CollectionsMiniPreview({ name, img }) {
  return (
    <Link to={"collections/" + name}>
      <div className="space-y-4 hover:cursor-pointer hover:scale-105">
        <img src={img} alt="" className="h-40 rounded-full" />
        <h2 className="text-center tracking-wider text-darkBrown">{name}</h2>
      </div>
    </Link>
  );
}

export default CollectionsMiniPreview;
