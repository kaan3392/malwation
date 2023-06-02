import * as S from "./styled";
import { forwardRef } from "react";

export interface FormItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormItem = forwardRef<HTMLInputElement, FormItemProps>(
  ({ label, id, error, ...props }, ref) => {
    return (
      <S.FormItem>
        <S.Label htmlFor={id}>{label}</S.Label>
        <S.Input ref={ref} id={id} {...props} />
        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      </S.FormItem>
    );
  }
);

export default FormItem;
