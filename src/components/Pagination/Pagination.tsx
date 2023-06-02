import { useEffect } from "react";
import { useStore } from "../../store";
import * as S from "./styled";

const Pagination = () => {
  const users = useStore((state) => state.users);
  const changePage = useStore((state) => state.changePage);
  const currentPage = useStore((state) => state.currentPage);

  const pages = Math.ceil(users.length / 8);

  const handleClick = (direction: string) => {
    if (direction === "next" && currentPage < pages) {
      changePage(currentPage + 1);
    }
    if (direction === "prev" && currentPage > 1) {
      changePage(currentPage - 1);
    }
  };


  useEffect(() => {
    if (currentPage > pages && pages > 0 ) {
      changePage(pages);
    }
  }, [currentPage, pages, changePage]);

  return (
    <S.PaginationContainer>
      <S.Boxes>
        <S.Box onClick={() => handleClick("prev")}>{"<"}</S.Box>
        {new Array(pages).fill(0).map((_, index) => (
          <S.Box
            key={index}
            active={currentPage === index + 1}
            onClick={() => changePage(index + 1)}
          >
            {index + 1}
          </S.Box>
        ))}
        <S.Box onClick={() => handleClick("next")}>{">"}</S.Box>
      </S.Boxes>
    </S.PaginationContainer>
  );
};

export default Pagination;
