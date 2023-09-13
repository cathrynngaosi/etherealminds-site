import { getImage } from "../../utils/helpers";

function SideImageThumbnail({ img, handleClick, display }) {
  return (
    <img
      src={getImage(img)}
      key={img}
      className={display === img ? "thumbnail-selected" : "thumbnail"}
      onClick={() => handleClick(img)}
    />
  );
}

export default SideImageThumbnail;
