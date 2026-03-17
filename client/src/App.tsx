import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ForgotPassword from "./auth/forgotpassword";
import Login from "./auth/login";
import ResetPassword from "./auth/ResetPassword";
import Singup from "./auth/Singup";
import VerifyEmail from "./auth/verifyEmail";
import HeroSection from "./components/HeroSection";
import MainLayout from "./layout/MainLayout";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HeroSection />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Singup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
]);
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <RouterProvider router={appRouter}></RouterProvider>
      </main>
    </>
  );
}

export default App;
