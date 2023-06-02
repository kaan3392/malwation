import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/LoginPage.tsx";
import PrivateRoute from "../components/PrivateRoute.tsx";
import Layout from "../components/Layout/Layout.tsx";
import HomePage from "../pages/home/HomePage.tsx";
import ProjectsPage from "../pages/projects/ProjectsPage.tsx";
import TasksPage from "../pages/tasks/TasksPage.tsx";
import UserList from "../pages/usersList/UserList.tsx";
import UpdateUser from "../pages/updateUser/UpdateUser.tsx";
import NotFound from "../pages/notFound/NotFound.tsx";

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
