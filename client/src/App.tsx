import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./auth/login";
import Mainlayout from "./mainlayout";
import Singup from "./auth/Singup";
import ForgotPassword from "./auth/forgotpassword";
import ResetPassword from "./auth/ResetPassword";
import VerifyEmail from "./auth/verifyEmail";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
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
