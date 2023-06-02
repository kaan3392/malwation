import { Outlet } from "react-router-dom";
import * as S from "./styled";
import Sidebar from "../Sidebar/Sidebar.tsx";

const Layout = () => {
  return (
    <S.Container>
      <Sidebar />
      <Outlet />
    </S.Container>
  );
};

export default Layout;
