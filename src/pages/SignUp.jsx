import { BiLockAlt } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

function SignUp() {
  return (
    <section className="p-10 text-darkBrown">
      <h1 className="mb-5 text-center uppercase">SignUp</h1>

      <div className="mx-auto w-1/2 space-y-3">
        <div className="flex space-x-2">
          <Input type="text" placeholder="first name" cols="2">
            <FiUser className="input-icon" />
          </Input>
          <Input type="text" placeholder="last name" cols="2">
            <FiUser className="input-icon" />
          </Input>
        </div>
        <Input type="email" placeholder="email address" cols="1">
          <MdOutlineMailOutline className="input-icon" />
        </Input>
        <Input type="password" placeholder="password" cols="1">
          <BiLockAlt className="input-icon" />
        </Input>
        <Input type="password" placeholder="confirm password" cols="1">
          <BiLockAlt className="input-icon" />
        </Input>
      </div>
      <div className="mt-5 text-center">
        <Button type="wide"> sign up </Button>
      </div>
      <div className="mt-3 text-center">
        <p className="text-darkBrown">
          already a member?{" "}
          <Link
            to="/login"
            className="cursor-pointer font-semibold hover:underline hover:underline-offset-1"
          >
            login!
          </Link>
        </p>
      </div>
    </section>
  );
}

export default SignUp;
