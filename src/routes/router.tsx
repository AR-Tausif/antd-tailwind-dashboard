import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../pages/layout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/",
        element: <div>Hello the dashboard of default</div>,
      },
    ],
  },
]);
