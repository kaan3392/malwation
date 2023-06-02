export interface ButtonProps {
  login?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" ;
  children?: React.ReactNode;
  disabled?: boolean;
  
}
