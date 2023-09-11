import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import ProductCard from "../../ui/ProductCard";

function CrowdFavorites() {
  return (
    <section className="py-10">
      <div className="m-auto text-center">
        <h1 className=" pb-10">crowd favorites</h1>
      </div>

      <div className="flex flex-row flex-wrap items-center justify-center gap-6">
        <ProductCard
          name="Macaron Mug"
          price="330"
          location="home"
          img="../src/data/images/macaron-mugs/cover.JPG"
        />

        <ProductCard
          name="Egg Tumbler"
          price="300"
          location="home"
          img="../src/data/images/egg-tumblers/2.JPG"
        />

        <ProductCard
          name="Small Jewelry Box"
          price="350"
          location="home"
          img="../src/data/images/sm-jewelry-box/cover.JPG"
        />
      </div>

      <div className="mx-auto mt-4 text-center">
        <Button to="/shop/shop-all">shop all</Button>
      </div>
    </section>
  );
}

export default CrowdFavorites;
