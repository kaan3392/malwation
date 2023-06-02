import * as S from "./styled";
import * as Svg from "../../svg/Svg.tsx";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ long, placeholder="Search", onChange }) => {
  return (
    <S.SearchContainer long={long} >
      <Svg.SearchIcon />
      <S.SearchInput onChange={onChange} long={long} type="text" placeholder={placeholder} />
    </S.SearchContainer>
  );
};

export default Input;
