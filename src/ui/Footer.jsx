import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";

function Footer() {
  return (
    <footer className="flex bg-seashellPink py-6 items-center justify-between px-6">
      <div>
        <img src="../../public/EMLogo.svg" alt="" className="h-14" />
      </div>
      <div className="flex flex-col items-center space-y-3">
        <div className="space-x-4">
          <Link to="/"> home </Link>
          <Link to="/shop"> shop </Link>
          <Link to="/faqs"> faqs </Link>
        </div>
        <div className="space-x-4">
          <Link to="/account"> account </Link>
          <Link to="/favorites"> faves </Link>
          <Link to="/cart"> cart </Link>
        </div>
      </div>
      <div className="pr-10">
        <p>follow us</p>
        <div className="flex items-center space-x-1 justify-center">
          <BsInstagram className="text-xl cursor-pointer" />
          <AiOutlineFacebook className="text-2xl cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
