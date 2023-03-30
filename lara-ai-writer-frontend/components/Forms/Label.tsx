export type LabelProps = {
    className?: string;
    [key: string]: any;
};

const Label = ({ className, children, ...props }: LabelProps) => (
    <label className={`form-label ${className}`} {...props}>
        {children}
    </label>
);

export default Label;