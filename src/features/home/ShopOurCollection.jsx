import CollectionsMiniPreview from "../../ui/CollectionsMiniPreview";
import { getImage } from "../../utils/helpers";

function ShopOurCollection() {
  return (
    <section className="px-5 py-10 md:p-10">
      <div className="m-auto mb-10 text-center">
        <h1>shop our collection</h1>
      </div>

      <div className="flex flex-wrap items-center justify-center space-x-5 space-y-4 md:space-x-10">
        <CollectionsMiniPreview
          name="tumblers"
          img={getImage("images/vacuum-tumblers/cover.JPG")}
        />

        <CollectionsMiniPreview
          name="mugs"
          img={getImage("images/double-walled-mugs/cover.JPG")}
        />

        <CollectionsMiniPreview
          name="jewelry boxes"
          img={getImage("images/sm-jewelry-box/1.PNG")}
        />

        <CollectionsMiniPreview
          name="glass items"
          img={getImage("images/wine-glass/cover.JPG")}
        />

        <CollectionsMiniPreview
          name="leather items"
          img={getImage("images/leather-keychains/cover.JPG")}
        />
      </div>
    </section>
  );
}

export default ShopOurCollection;
