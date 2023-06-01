import * as S from "./styled"
import { ButtonProps } from "./types"

const Button:React.FC<ButtonProps> = ({ login, ...props}) => {
  return (
    <S.Button type="submit" {...props} login={login} />
  )
}

export default Button