import * as S from "./styled";
import { DeleteIcon, UpdatetIcon } from "../../svg/Svg";
import { useStore } from "../../store";
import { useEffect, useMemo } from "react";
import LoadingScreen from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const UsersTable = () => {
  const navigate = useNavigate();

  const users = useStore((state) => state.users);
  const fetchUsers = useStore((state) => state.fetchUsers);
  const currentPage = useStore((state) => state.currentPage);

  const deleteUser = useStore((state) => state.deleteUser);
  const deleteUserLoading = useStore((state) => state.deleteUserLoading);
  const currentUser = useStore((state) => state.currentUser);

  const usersToShow = useMemo(() => {
    const start = (currentPage - 1) * 8;
    const end = currentPage * 8;
    return users.slice(start, end);
  }, [currentPage, users]);

  useEffect(() => {
    if (!users.length) {
      fetchUsers();
    }
  }, [users, fetchUsers]);

  const handleClick = (id: string) => {
    navigate(`/users/${id}/update`);
  };



  return (
    <S.Container>
      {deleteUserLoading && <LoadingScreen userDeleting={deleteUserLoading} />}
      <S.Wrapper>
        <S.Table>
          <S.TableHead>
            <S.TableHeadData>Name</S.TableHeadData>
            <S.TableHeadData>Email</S.TableHeadData>
            <S.TableHeadData>Phone</S.TableHeadData>
            <S.TableHeadData>Role</S.TableHeadData>
            <S.TableHeadData>Active</S.TableHeadData>
            <S.TableHeadData></S.TableHeadData>
            <S.TableHeadData></S.TableHeadData>
          </S.TableHead>
          <S.TableBody>
            {usersToShow.map((user) => (
              <S.TableRow key={user.id}>
                <S.TableData>{user.name}</S.TableData>
                <S.TableData title={user.email} >{user.email.length > 28 ? user.email.substring(0,28) + "..." :user.email}</S.TableData>
                <S.TableData>{user.phone}</S.TableData>
                <S.TableData roleOfUser={true}>{user.role}</S.TableData>
                <S.TableData>
                  {user.active ? <S.Circle active /> : <S.Circle />}
                </S.TableData>
                <S.TableData
                  onClick={() => {
                    handleClick(user.id);
                  }}
                >
                  <UpdatetIcon />
                </S.TableData>
                {user.id !== currentUser?.id ? (
                  <S.TableData onClick={() => deleteUser(user.id)}>
                    <DeleteIcon />
                  </S.TableData>
                ) : (
                  <S.TableData />
                )}
              </S.TableRow>
            ))}
          </S.TableBody>
        </S.Table>
      </S.Wrapper>
    </S.Container>
  );
};

export default UsersTable;
