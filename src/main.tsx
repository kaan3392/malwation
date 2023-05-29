import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./reset.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserList from "./pages/users/index.tsx";
import "./global.css"
import UpdateUser from "./pages/updateUser/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "user",
    element: <UserList />,
  },
  {
    path: "update/:id",
    element: <UpdateUser />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
