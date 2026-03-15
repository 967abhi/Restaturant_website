import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const loading = false;
  // const [input, setInput] = useState({
  //   email: "",
  //   password: "",
  // });
  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form
        action=""
        className="md:p-8 w-full max-w-md  border border-gray-200 rounded-lg mx-4 flex flex-col gap-2"
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Singh Eats</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              className="pl-8 focus-visible:ring-0  "
            />
            <Mail className="absolute inset-y-2 left-2 h-4 text-gray-500 pointer-event-none" />
          </div>
        </div>
        {/* <label>Password</label> */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Password "
              className=" pl-8 focus-visible:ring-0 "
            />
            <LockKeyhole className="absolute inset-y-2 left-2 h-4 text-gray-500 pointer-event-none" />
          </div>
        </div>
        <div className="mb-4">
          {loading ? (
            <Button className="w-full bg-orange hover:bg-hoverOrange">
              <Loader2
                className="mr-2 h-4
                w-4 animate-spin"
              />{" "}
              Please wait
            </Button>
          ) : (
            <Button className="w-full  bg-orange hover:bg-hoverOrange">
              Login
            </Button>
          )}
        </div>
        {/* <Separator /> */}
        <div className="flex gap-2">
          <p>Don't have an account</p>
          <Link to="/signup " className="underline text-blue-500 font-bold">
            Singup
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
