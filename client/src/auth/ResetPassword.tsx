import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Lock } from "lucide-react";
import { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState<string>("");
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
          <h1 className=" font-extrabold text-2xl mb-2">Reset Password</h1>
          <p className="text-sm text-gray-600 ">Enter your new password</p>
        </div>
        <div className="relative">
          <Input
            type="password"
            name="email"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-8 focus-visible:ring-0"
          />
          <Lock className="absolute inset-y-2 left-2 h-4 text-gray-500 pointer-event-none" />
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
              Reset
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
