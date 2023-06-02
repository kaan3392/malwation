import { IPropsLetter } from "../types";
import * as S from "./styled";

const LetterI:React.FC<IPropsLetter> = ({login}) => {
  return <S.LetterI login={login}>I</S.LetterI>;
};

export default LetterI;
