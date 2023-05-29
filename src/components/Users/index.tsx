import Input from "../input";
import Pagination from "../pagination";
import UsersTable from "../userTable";
import * as S from "./styled";
import { FilterIcon } from "../../svg/Svg";

const Users = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Users</S.Title>
        <S.InputAndFilterContainer>
          <Input long={true} placeholder="Search User.." />
          <S.FilterContainer>
            <FilterIcon />
            Filter
          </S.FilterContainer>
        </S.InputAndFilterContainer>
        <UsersTable />
        <Pagination />
      </S.Wrapper>
    </S.Container>
  );
};

export default Users;
