import CrowdFavorites from "../features/home/CrowdFavorites";
import HeroImages from "../features/home/HeroImages";
import OrderSteps from "../features/home/OrderSteps";
import ShopOurCollection from "../features/home/ShopOurCollection";
import Tagline from "../features/home/Tagline";
import JoinTheClub from "../ui/JoinTheClub";

function Home() {
  return (
    <main>
      <HeroImages />
      <Tagline />
      <CrowdFavorites />
      <OrderSteps />
      <ShopOurCollection />
      <JoinTheClub />
    </main>
  );
}

export default Home;
