import * as S from "./styled";
import * as Svg from "../../svg/Svg";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ long, placeholder="Search" }) => {
  return (
    <S.SearchContainer long={long} >
      <Svg.Search />
      <S.SearchInput long={long} type="text" placeholder={placeholder} />
    </S.SearchContainer>
  );
};

export default Input;
