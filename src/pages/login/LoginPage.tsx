import { useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import z from "zod";
import { useStore } from "../../store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";

import FormItem from "../../components/FormItem/FormItem";
import Button from "../../components/Button/Button";
import * as S from "./styled";
import Logo from "../../components/Logo/Logo";

const schrema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(8),
});

type FormValues = z.infer<typeof schrema>;

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isAuth = useStore((state) => state.isAuth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(schrema),
  });

  const login = useStore((state) => state.login);
  const loginError = useStore((state) => state.loginError);
  const loginLoading = useStore((state) => state.loginLoading);

  useEffect(() => {
    if (loginError) {
      toast.error(loginError.message as string);
      reset();
      return;
    }
  }, [loginError,reset]);

  const signUp = async (info: FormValues) => {
    const { success } = await login(info.email, info.password);

    if (!success) {
      return;
    }

    const urlSearchParams = new URLSearchParams(location.search);

    const redirect = urlSearchParams.get("redirect");

    if (redirect) {
      navigate(redirect);
    } else {
      navigate("/users");
    }
  };

  if (isAuth) {
    return <Navigate to="/users" />;
  }

  return (
    <S.Container>
      <S.Wrapper>
        <Logo login />
        <S.Subtitle bold>Log in to your account</S.Subtitle>
        <S.Subtitle>Welcome back! Please enter your details</S.Subtitle>
        <S.Form onSubmit={handleSubmit(signUp)}>
          <FormItem
            {...register("email")}
            label="Email"
            placeholder="Please enter your mail"
            error={errors.email?.message}
          />
          <FormItem
            {...register("password")}
            label="Password"
            placeholder="******"
            type="password"
            error={errors.password?.message}
          />
          <S.Forgot to="/forgot">Forgot password?</S.Forgot>
          <Button type="submit" login disabled={loginLoading}>
            Sign In
          </Button>
        </S.Form>
        <S.Account>
          Don't have an account? <S.Register to="/register">Sign Up</S.Register>
        </S.Account>
        <Toaster position="bottom-center" reverseOrder={false} />
      </S.Wrapper>
    </S.Container>
  );
};

export default Login;
