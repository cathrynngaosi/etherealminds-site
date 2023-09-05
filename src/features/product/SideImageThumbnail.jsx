function SideImageThumbnail({ img, handleClick, display }) {
  return (
    <img
      src={img}
      key={img}
      className={display === img ? "thumbnail-selected" : "thumbnail"}
      onClick={() => handleClick(img)}
    />
  );
}

export default SideImageThumbnail;
