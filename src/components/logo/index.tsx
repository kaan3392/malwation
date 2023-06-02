
import * as S from "./styled";
import { IPropsLetter } from "../../letters/types";
import LetterW from "../../letters/LetterW";
import LetterI from "../../letters/LetterI";
import LetterO from "../../letters/LetterO";

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
