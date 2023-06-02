import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/LoginPage";
import PrivateRoute from "../components/PrivateRoute";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/home/HomePage";
import ProjectsPage from "../pages/projects/ProjectsPage";
import TasksPage from "../pages/tasks/TasksPage";
import UserList from "../pages/usersList/UserList";
import UpdateUser from "../pages/updateUser/UpdateUser";
import NotFound from "../pages/notFound/NotFound";

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
