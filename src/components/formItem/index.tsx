import * as S from "./styled"
import {FormItemProps} from "./types"

const FormItem:React.FC<FormItemProps> = ({name,placeholder}) => {
  return (
    <S.FormItem>
      <S.Label htmlFor={name}>{name}</S.Label>
      <S.Input type={name} id={name} placeholder={placeholder} />
    </S.FormItem>
  );
};

export default FormItem;
