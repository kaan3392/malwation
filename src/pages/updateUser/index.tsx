import FormItem from "../../components/formItem";
import * as S from "./styled";
import { ArrowLeftIcon } from "../../svg/Svg";
import Button from "../../components/button";

const UpdateUser = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Back to={"/users"}>
          <ArrowLeftIcon />
          Back to Users</S.Back>
        <S.Title>Update User</S.Title>
        <S.UpdateForm>
          <S.InputContainer>
              <FormItem name="Name" placeholder="name" />
              <FormItem name="mail" placeholder="mail" />
            </S.InputContainer>
            <S.InputContainer>
              <FormItem name="phone" placeholder="phone" />
              <FormItem name="role" placeholder="role" />
            </S.InputContainer>
          <S.ActiveContainer><span>Active</span>
          <S.ActiveButton><div/></S.ActiveButton>
          </S.ActiveContainer>
          <Button>Update User</Button>
        </S.UpdateForm>
      </S.Wrapper>
    </S.Container>
  );
};

export default UpdateUser;
