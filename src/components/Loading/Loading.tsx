import * as S from "./styled";

interface IPropsLoadingScreen {
  userDeleting?: boolean;
}

const LoadingScreen:React.FC<IPropsLoadingScreen> = ({userDeleting}) => {
  return (
    <S.Container userDeleting={userDeleting}>
      <S.Balls>
        <S.Ball userDeleting={userDeleting} />
        <S.Ball userDeleting={userDeleting} delay="ball2"></S.Ball>
        <S.Ball userDeleting={userDeleting} delay="ball3"></S.Ball>
      </S.Balls>
    </S.Container>
  );
}

export default LoadingScreen;