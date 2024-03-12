import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Lec3 from "./pages/lec3";
import Lec4 from "./pages/lec4";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
