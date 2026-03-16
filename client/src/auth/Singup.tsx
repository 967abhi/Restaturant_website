import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserSingupSchema, type SingupInputState } from "@/schema/userSchema";
import { Loader2, LockKeyhole, Mail, Phone, User } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router-dom";
//typescript me 2 tarika hota hai type define krne ka
// type SingupInputState = {
//   fullname: string;
//   email: string;
//   password: string;
//   contact: string;
// };

const Singup = () => {
  const loading = false;
  const [input, setInput] = useState<SingupInputState>({
    fullname: "",
    email: "",
    password: "",
    contact: "",
  });
  const [error, setError] = useState<Partial<SingupInputState>>({});
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const loginSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    const result = UserSingupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setError(fieldErrors as Partial<SingupInputState>);
      return;
    }

    // TODO: API call to login
    console.log(input);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen">
      <form
        onSubmit={loginSubmitHandler}
        className="md:p-8 w-full max-w-md border border-gray-200 rounded-lg mx-4 flex flex-col gap-2"
      >
        <div className="mb-4">
          <h1 className="font-bold text-2xl">Singh Eats</h1>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              name="fullname"
              placeholder="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              className="pl-8 focus-visible:ring-0"
            />
            <User className="absolute inset-y-2 left-2 h-4 text-gray-500 pointer-event-none" />
            {error && (
              <span className="text-sm text-red-500">{error.fullname}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={input.email}
              onChange={changeEventHandler}
              className="pl-8 focus-visible:ring-0"
            />
            <Mail className="absolute inset-y-2 left-2 h-4 text-gray-500 pointer-event-none" />
            {error && (
              <span className="text-sm text-red-500">{error.email}</span>
            )}
          </div>
        </div>
        {/* <label>Password</label> */}
        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={input.password}
              onChange={changeEventHandler}
              className="pl-8 focus-visible:ring-0"
            />
            <LockKeyhole className="absolute inset-y-2 left-2 h-4 text-gray-500 pointer-event-none" />
            {error && (
              <span className="text-sm text-red-500">{error.password}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="number"
              name="contact"
              placeholder="phone number"
              value={input.contact}
              onChange={changeEventHandler}
              className="pl-8 focus-visible:ring-0"
            />
            <Phone className="absolute inset-y-2 left-2 h-4 text-gray-500 pointer-event-none" />
            {error && (
              <span className="text-sm text-red-500">{error.contact}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
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
              Login
            </Button>
          )}
        </div>
        {/* <Separator /> */}
        <div className="flex gap-2">
          <p>Already have an account</p>
          <Link to="/login" className="underline text-blue-500 font-bold">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Singup;
