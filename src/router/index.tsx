import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import PrivateRoute from "../components/PrivateRoute";
import Layout from "../components/Layout";
import HomePage from "../pages/home";
import ProjectsPage from "../pages/project";
import TasksPage from "../pages/tasks";
import UserList from "../pages/usersList";
import UpdateUser from "../pages/updateUser";
import NotFound from "../pages/notFound";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/tasks",
        element: <TasksPage />,
      },
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
  {
    path: "*",
    element: <NotFound />,
  },
]);
