import { useState } from "react";
import SideImageThumbnail from "./SideImageThumbnail";
import { getImage } from "../../utils/helpers";

function ProductImages({ images }) {
  const [displayPhoto, setDisplayPhoto] = useState(images[0]);

  function handleClickSidePhoto(img) {
    setDisplayPhoto(img);
  }

  return (
    <div className="flex flex-col-reverse md:w-2/4 md:flex-row md:space-x-4">
      <div className="mt-4 flex space-x-1.5 overflow-x-scroll md:mt-0 md:flex-col md:space-x-0 md:space-y-2">
        {images.map((img) => (
          <SideImageThumbnail
            img={img}
            key={img}
            display={displayPhoto}
            handleClick={() => handleClickSidePhoto(img)}
          />
        ))}
      </div>
      <div className="w-fit">
        <img src={getImage(displayPhoto)} alt="" className="w-full" />
      </div>
    </div>
  );
}

export default ProductImages;
