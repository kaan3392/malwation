import { IPropsLetter } from "../types";
import * as S from "./styled";

const LetterW:React.FC<IPropsLetter> = ({login}) => {
  return (
    <S.WLetter  login={login} >W</S.WLetter>
  );
};

export default LetterW;