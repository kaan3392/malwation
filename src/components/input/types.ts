export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    long?: boolean;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
