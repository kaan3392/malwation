import * as S from "./styled";

export default function LoadingScreen() {
  return (
    <S.Container>
      <S.Balls>
        <S.Ball />
        <S.Ball delay="ball2"></S.Ball>
        <S.Ball delay="ball3"></S.Ball>
      </S.Balls>
    </S.Container>
  );
}