import { Outlet } from "react-router-dom";
import * as S from "./styled";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <S.Container>
      <Sidebar />
      <Outlet />
    </S.Container>
  );
};

export default Layout;
