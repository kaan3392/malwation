import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar"
import * as S from "./styled"

const Layout = () => {
  return (
    <S.Container>
      <Sidebar />
      <Outlet/>
    </S.Container>
  )
}

export default Layout