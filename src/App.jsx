import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "./pages/homepage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to={"/homepage"} />,
    },
    {
      path: "/homepage",
      element: <HomePage />,
    },
  ],
  { basename: "/shortly" }
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
