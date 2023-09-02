import CollectionsMiniPreview from "../../ui/CollectionsMiniPreview";

function ShopOurCollection() {
  return (
    <section className="p-10">
      <div className="m-auto text-center mb-10">
        <h1>shop our collection</h1>
      </div>

      <div className="flex justify-center items-center space-x-10">
        <CollectionsMiniPreview
          name="tumblers"
          img="../src/data/images/vacuum-tumblers/cover.JPG"
        />

        <CollectionsMiniPreview
          name="mugs"
          img="../src/data/images/double-walled-mugs/cover.JPG"
        />

        <CollectionsMiniPreview
          name="jewelry boxes"
          img="../src/data/images/sm-jewelry-box/1.PNG"
        />

        <CollectionsMiniPreview
          name="glass items"
          img="../src/data/images/wine-glass/cover.JPG"
        />

        <CollectionsMiniPreview
          name="leather items"
          img="../src/data/images/leather-keychains/cover.JPG"
        />
      </div>
    </section>
  );
}

export default ShopOurCollection;
