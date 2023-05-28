import * as S from "./styled";

const Login = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>MALWATION</S.Title>
        <S.Subtitle bold>Log in to your account</S.Subtitle>
        <S.Subtitle>Welcome back! Please enter your details</S.Subtitle>
        <S.Form>
          <S.FormItem>
            <S.Label htmlFor="email" >Email</S.Label>
            <S.Input type="email" id="email" placeholder="Enter your email" />
          </S.FormItem>
          <S.FormItem>
            <S.Label>Password</S.Label>
            <S.Input type="password" placeholder="********" />
          </S.FormItem>
          <S.Forgot to="/forgot">Forgot password?</S.Forgot>
          <S.Button>Sign in</S.Button>
        </S.Form>
        <S.Account >Don't have an account? <S.Register to="/register">Sign Up</S.Register></S.Account>
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
