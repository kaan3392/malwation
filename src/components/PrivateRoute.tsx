import React, { PropsWithChildren } from "react";
import { useStore } from "../store";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const isAuth = useStore((state) => state.isAuth);

  const location = useLocation();

  const urlSearchParams = new URLSearchParams();

  urlSearchParams.append("redirect", location.pathname);

  if (!isAuth)
    return (
      <Navigate
        to={{ pathname: "/login", search: urlSearchParams.toString() }}
      />
    );

  return <>{children}</>;
};

export default PrivateRoute;
