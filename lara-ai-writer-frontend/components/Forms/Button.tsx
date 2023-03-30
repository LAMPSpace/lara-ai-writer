export type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    [key: string]: any;
};

const Button = ({ type = 'submit', className, children, ...props }: ButtonProps) => (
    <button type={type} className={`btn ${className}`} {...props}>
        {children}
    </button>
);

export default Button;