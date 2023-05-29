import LetterI from "../../letters/letterI";
import LetterO from "../../letters/letterO";
import LetterW from "../../letters/letterW";
import * as S from "./styled";

const Logo = () => {
  return (
    <S.Title>
      MAL
      <LetterW />
      AT <LetterI />
      <LetterO />N
    </S.Title>
  );
};

export default Logo;
