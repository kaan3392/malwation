import * as S from "./styled";
import { forwardRef } from "react";

export interface ActiveItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  active?: boolean;
}

const ActiveItem = forwardRef<HTMLInputElement, ActiveItemProps>(
  ({ id,active,  ...props }, ref) => {
    return (
      <S.ActiveItem>
        <span>Active</span>
        <div>
          <S.Label active={active} htmlFor={id}>
            <span />
            <S.Input  hidden type="checkbox" ref={ref} id={id} {...props} />
          </S.Label>
        </div>
      </S.ActiveItem>
    );
  }
);

export default ActiveItem;
