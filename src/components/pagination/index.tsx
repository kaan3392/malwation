import * as S from "./styled";

const Pagination = () => {
  return (
    <S.PaginationContainer>
      <S.Boxes>
        <S.Box>{"<"}</S.Box>
        <S.Box>1</S.Box>
        <S.Box>2</S.Box>
        <S.Box>3</S.Box>
        <S.Box>{">"}</S.Box>
      </S.Boxes>
    </S.PaginationContainer>
  );
};

export default Pagination;
