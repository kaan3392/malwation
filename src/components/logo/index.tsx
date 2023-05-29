import LetterI from "../../letters/letterI";
import LetterO from "../../letters/letterO";
import LetterW from "../../letters/letterW";
import { IPropsLetter } from "../../letters/types";
import * as S from "./styled";

const Logo:React.FC<IPropsLetter> = ({login}) => {
  return (
    <S.Title login={login}>
      MAL
      <LetterW login={login} />
      AT <LetterI login={login} />
      <LetterO login={login} />N
    </S.Title>
  );
};

export default Logo;
