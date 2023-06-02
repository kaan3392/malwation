
import * as S from "./styled";
import { IPropsLetter } from "../../letters/types.ts";
import LetterW from "../../letters/LetterW/LetterW.tsx";
import LetterI from "../../letters/LetterI/LetterI.tsx";
import LetterO from "../../letters/LetterO/LetterO.tsx";

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
