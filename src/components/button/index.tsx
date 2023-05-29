import * as S from "./styled"
import { ButtonProps } from "./types"

const Button:React.FC<ButtonProps> = ({children, login}) => {
  return (
    <S.Button login={login} >{children}</S.Button>
  )
}

export default Button