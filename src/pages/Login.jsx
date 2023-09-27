import { BiLockAlt } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="p-10 text-darkBrown">
      <h1 className="mb-5 text-center uppercase">Login</h1>

      <div className="mx-auto space-y-3 md:w-1/2">
        <Input type="email" placeholder="email address" cols="1">
          <MdOutlineMailOutline className="input-icon" />
        </Input>
        <Input type="password" placeholder="password" cols="1">
          <BiLockAlt className="input-icon" />
        </Input>
        <div className="flex justify-between lowercase text-darkBrown">
          <label>
            <input
              type="checkbox"
              className="mr-1 text-sm accent-mediumBrown "
            />
            Remember me
          </label>
          <p className="cursor-pointer text-darkBrown hover:underline hover:underline-offset-1">
            Forgot Password
          </p>
        </div>
      </div>
      <div className="mt-5 text-center">
        <Button type="wide"> login </Button>
      </div>
      <div className="mt-3 text-center">
        <p className="text-darkBrown">
          are you new here?{" "}
          <Link
            to="/signup"
            className="cursor-pointer font-semibold hover:underline hover:underline-offset-1"
          >
            sign up!
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
