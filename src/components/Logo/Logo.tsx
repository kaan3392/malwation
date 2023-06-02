
import * as S from "./styled";
import { IPropsLetter } from "../../letters/types";
import LetterW from "../../letters/LetterW/LetterW";
import LetterI from "../../letters/LetterI/LetterI";
import LetterO from "../../letters/LetterO/LetterO";

const Logo:React.FC<IPropsLetter> = ({login}) => {
  return (
    <S.Container>

    <S.Title login={login}>
      MAL
      <LetterW login={login} />
      AT <LetterI login={login} />
      <LetterO login={login} />N
    </S.Title>
    </S.Container>
  );
};

export default Logo;
