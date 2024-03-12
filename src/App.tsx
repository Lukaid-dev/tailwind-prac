import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Lec3 from "./pages/lec3";
import Lec4 from "./pages/lec4";
import Lec5 from "./pages/lec5";
import Lec6 from "./pages/lec6";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/lec3",
    element: <Lec3 />,
  },
  {
    path: "/lec4",
    element: <Lec4 />,
  },
  {
    path: "/lec5",
    element: <Lec5 />,
  },
  {
    path: "/lec6",
    element: <Lec6 />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
