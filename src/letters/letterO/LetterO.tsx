import { IPropsLetter } from "../types";
import * as S from "./styled";

const LetterO: React.FC<IPropsLetter> = ({ login }) => {
  return (
    <S.Div1 login={login}>
      <S.Div2 login={login}  />
      <S.Div3 login={login} />
    </S.Div1>
  );
};

export default LetterO;
