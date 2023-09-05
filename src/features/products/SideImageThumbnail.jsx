function SideImageThumbnail({ img, handleClick }) {
  return (
    <img
      src={img}
      key={img}
      className="h-20 cursor-pointer"
      onClick={() => handleClick(img)}
    />
  );
}

export default SideImageThumbnail;
