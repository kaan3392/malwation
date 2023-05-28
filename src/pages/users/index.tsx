import Users from "../../components/Users";
import Sidebar from "../../components/sidebar";
import * as S from "./styled"

const UserList = () => {
  return (
    <S.Container>
      <Sidebar />
      <Users />
    </S.Container>
  );
};

export default UserList;
