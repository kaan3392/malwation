import * as S from "./styled";
import { data } from "../../data";
import { DeleteIcon } from "../../svg/Svg";

const UsersTable = () => {
  return (
    <S.Container>
      <S.Table>
        <S.TableHead>
            <S.TableHeadData>Name</S.TableHeadData>
            <S.TableHeadData>Email</S.TableHeadData>
            <S.TableHeadData>Phone</S.TableHeadData>
            <S.TableHeadData>Role</S.TableHeadData>
            <S.TableHeadData>Active</S.TableHeadData>
            <S.TableHeadData></S.TableHeadData>
        </S.TableHead>
        <S.TableBody>
          {data.slice(0, 9).map((user) => (
            <S.TableRow key={user.id}>
              <S.TableData>{user.firstName}</S.TableData>
              <S.TableData>{user.email}</S.TableData>
              <S.TableData>{user.phone}</S.TableData>
              <S.TableData roleOfUser={true}>{user.role}</S.TableData>
              <S.TableData>
                {user.active ? <S.Circle active /> : <S.Circle />}
              </S.TableData>
              <S.TableData>
                <DeleteIcon />
              </S.TableData>
            </S.TableRow>
          ))}
        </S.TableBody>
      </S.Table>
    </S.Container>
  );
};

export default UsersTable;
