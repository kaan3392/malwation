import { useMemo, useState } from "react";
import * as S from "./styled";
import { useStore } from "../../store";
import { User } from "../../types";

import { FilterIcon } from "../../svg/Svg";
import UsersTable from "../UserTable/UserTable";
import Pagination from "../Pagination/Pagination";
import Input from "../Input/Input";
import LoadingScreen from "../Loading/Loading";

const Users = () => {
  const users = useStore((state) => state.users);
  const usersLoading = useStore((state) => state.usersLoading);
  const [search, setSearch] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  const filteredUser = useMemo(() => {
    if (search.length === 0) return;
    return users.filter(
      (user: User) =>
        user.name.toLowerCase().includes(search.toLowerCase()) 
    );
  }, [search, users]);

  if (usersLoading) {
    return <LoadingScreen />;
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>Users</S.Title>
        <S.InputAndFilterContainer>
          <Input onChange={onChange} long={true} placeholder="Search user by name.." />
          <S.FilterContainer>
            <FilterIcon />
            Filter
          </S.FilterContainer>
          {filteredUser && filteredUser.length > 0 && search.length > 0 && (
            <S.FilteredUsersContainer>
              <S.FilteredUsersWrapper>
                {filteredUser?.map((user: User) => (
                  <S.FilteredUserItem to={`/users/${user.id}/update`}>
                    {user.name}
                  </S.FilteredUserItem>
                ))}
              </S.FilteredUsersWrapper>
            </S.FilteredUsersContainer>
          )}
        </S.InputAndFilterContainer>
        <UsersTable />
        <Pagination />
      </S.Wrapper>
    </S.Container>
  );
};

export default Users;
