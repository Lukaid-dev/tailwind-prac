import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Lec3 from './pages/lec3';
import Lec4 from './pages/lec4';
import Lec5 from './pages/lec5';
import Lec6 from './pages/lec6';
import Lec7 from './pages/lec7';
import Lec8 from './pages/lec8';
import Lec9 from './pages/lec9';
import Lec10 from './pages/lec10';
import Lec11 from './pages/lec11';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/lec3',
    element: <Lec3 />,
  },
  {
    path: '/lec4',
    element: <Lec4 />,
  },
  {
    path: '/lec5',
    element: <Lec5 />,
  },
  {
    path: '/lec6',
    element: <Lec6 />,
  },
  {
    path: '/lec7',
    element: <Lec7 />,
  },
  {
    path: '/lec8',
    element: <Lec8 />,
  },
  {
    path: '/lec9',
    element: <Lec9 />,
  },
  {
    path: '/lec10',
    element: <Lec10 />,
  },
  {
    path: '/lec11',
    element: <Lec11 />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
