import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";

function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between bg-seashellPink px-6 py-6">
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
        <div className="flex items-center justify-center space-x-1">
          <BsInstagram className="cursor-pointer text-xl" />
          <AiOutlineFacebook className="cursor-pointer text-2xl" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
