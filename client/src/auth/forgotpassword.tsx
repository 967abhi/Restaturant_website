import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Mail } from "lucide-react";
import { useState } from "react";

const ForgotPassword = () => {
  const [input, setInput] = useState<string>("");
  const [error] = useState<boolean>(false);
  // const loading = useState<boolean>(false);
  const loading = false;

  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form
        className="md:p-8 w-full max-w-md border border-gray-200 rounded-lg mx-4 flex flex-col gap-2"
        action=""
      >
        <div className="text-center">
          <h1 className=" font-extrabold text-2xl mb-2">Forgot Password</h1>
          <p className="text-sm text-gray-600 ">
            Enter your email address to reset your password
          </p>
        </div>
        <div className="relative">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="pl-8 focus-visible:ring-0"
          />
          <Mail className="absolute inset-y-2 left-2 h-4 text-gray-500 pointer-event-none" />
          {error && <span className="text-sm text-red-500">{false}</span>}{" "}
        </div>
        <div className="mb-4 mt-2">
          {loading ? (
            <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
              <Loader2
                className="mr-2 h-4
                w-4 animate-spin"
              />{" "}
              Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full  bg-orange hover:bg-hoverOrange"
            >
              Send Reset Link
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
