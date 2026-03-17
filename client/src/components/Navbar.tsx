import { Menubar } from "@base-ui/react";
import { Link } from "react-router-dom";
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Loader2, Moon, ShoppingCart, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  const admin = true;
  const loading = false;
  //   const cart=10;
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex items-center justify-between h-14">
        <Link to="/">
          <h1 className="font-bold md:font-extrabold text-2xl">Singh Eats </h1>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile </Link>
            <Link to="/order/status">Order</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Link to="/cart" className="relative cursor-pointer">
            <ShoppingCart />
          </Link>
          <div>
            <Avatar>
              <AvatarImage alt="profilephoto" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div>
            {loading ? (
              <Button className="bg-orange hover:bg-hoverOrange">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button className="bg-orange hover:bg-hoverOrange">
                Logout
              </Button>
            )}
          </div>
          {admin && (
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Dashboard</MenubarTrigger>
                <MenubarContent>
                  <Link to="/admin/restaurant">
                    <MenubarItem>Restaurant</MenubarItem>
                  </Link>
                  <Link to="/admin/menu">
                    <MenubarItem>Menu</MenubarItem>
                  </Link>
                  <Link to="/admin/orders">
                    <MenubarItem>Order</MenubarItem>
                  </Link>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
