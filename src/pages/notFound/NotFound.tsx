import * as S from "./styled";

const NotFound = () => {
  return (
    <S.Container>
      <S.Not>Page Not Found!</S.Not>
      <S.Number>404</S.Number>
      <S.GoBack to={"/"} >Go to Home Page</S.GoBack>
    </S.Container>
  );
};

export default NotFound;
