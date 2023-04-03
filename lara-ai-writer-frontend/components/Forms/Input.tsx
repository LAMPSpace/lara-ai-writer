export type InputProps = {
    disabled?: boolean;
    className?: string;
    [key: string]: any;
};

const Input = ({ disabled = false, className, ...props }: InputProps) => (
    <input className={`form-control ${className}`} disabled={disabled} {...props} />
);

export default Input;
