import { createBrowserRouter } from "react-router-dom";
import UserList from "../pages/usersList";
import UpdateUser from "../pages/updateUser";
import Login from "../pages/login";
import Layout from "../components/layout";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/users",
        element: <UserList />,
      },
      {
        path: "/users/:id/update",
        element: <UpdateUser />,
      },
    ],
  },
]);
