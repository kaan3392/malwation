import Button from "../../components/button";
import FormItem from "../../components/formItem";
import Logo from "../../components/logo";
import * as S from "./styled";

const Login = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Logo login />
        <S.Subtitle bold>Log in to your account</S.Subtitle>
        <S.Subtitle>Welcome back! Please enter your details</S.Subtitle>
        <S.Form>
          <FormItem name="email" placeholder="Please enter your mail" />
          <FormItem name="password" placeholder="******" />
          <S.Forgot to="/forgot">Forgot password?</S.Forgot>
          <Button login>Sign In</Button>
        </S.Form>
        <S.Account>
          Don't have an account? <S.Register to="/register">Sign Up</S.Register>
        </S.Account>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
