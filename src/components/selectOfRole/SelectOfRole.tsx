import * as S from "./styled";
import { forwardRef } from "react";

export interface FormItemProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
}

const SelectOfRole = forwardRef<HTMLSelectElement, FormItemProps>(
  ({ label, id, error, defaultValue, ...props }, ref) => {
    return (
      <S.FormItem>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.Select defaultValue={defaultValue} ref={ref} id={id} {...props} >
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </S.Select>
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.FormItem>
    );
  }
);

export default SelectOfRole;
