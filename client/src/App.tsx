import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./auth/login";
import Mainlayout from "./mainlayout";
import Singup from "./auth/Singup";
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
